import { Stack } from "expo-router";
import { SQLiteProvider } from "expo-sqlite";

async function initializeDatabase(db: any) {
  try {
    // 1. Create the table if it doesn't exist
    await db.execAsync(`
      PRAGMA journal_mode = WAL;
      CREATE TABLE IF NOT EXISTS notes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        description TEXT,
        date TEXT NOT NULL  
      );
    `);

    // 2. Check if there are already notes in the database
    const result = await db.getFirstAsync("SELECT COUNT(*) as count FROM notes;");

    // 3. If count is 0, seed the database with 3 mock notes
    if (result && result.count === 0) {
      await db.execAsync(`
        INSERT INTO notes (title, description, date) VALUES 
        ('Meeting Notes', 'Discussed Zustand state management and expo-sqlite local integration.', '13/06/2026'),
        ('Grocery List', 'Milk, eggs, white bread, and coffee beans.', '12/06/2026'),
        ('App Ideas', 'Build a simple local-first markdown note taking app using Expo.', '11/06/2026');
      `);
      console.log("Mock data seeded successfully!");
    }
    console.log("Database Initialized Successfully!");
  }
  catch (error) {
    console.log("Error Initializing Database: ", error);
  }
}


export default function RootLayout() {
  return (
    <SQLiteProvider databaseName="fluxnote.db" onInit={initializeDatabase}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </SQLiteProvider>
  );
}
