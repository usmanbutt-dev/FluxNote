import { Stack } from "expo-router";
import { SQLiteProvider } from "expo-sqlite";

async function initializeDatabase(db: any) {
  try {
    await db.execAsync("DROP TABLE IF EXISTS notes;");

    await db.execAsync(`
      PRAGMA journal_mode = WAL;
      CREATE TABLE IF NOT EXISTS notes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        description TEXT,
        date TEXT NOT NULL  
      );
    `);

    const result = await db.getFirstAsync("SELECT COUNT(*) as count FROM notes;");

    if (result && result.count === 0) {
      await db.execAsync(`
        INSERT INTO notes (title, description, date) VALUES 
        ('Meeting Notes', 'Discussed Zustand state management and expo-sqlite local integration. Reviewed the architecture choices between raw SQL and ORMs, deciding to stick to clean raw queries for performance.', '13/06/2026'),
        ('Grocery List', 'Pick up milk, eggs, white bread, and coffee beans from the local market. Also need to grab fresh avocados, cilantro, and limes for the weekend barbecue event.', '12/06/2026'),
        ('App Ideas', 'Build a simple local-first markdown note taking app using Expo. The interface should have smooth gestures, drag-to-reorder cards, and offline syncing with a remote backend.', '11/06/2026'),
        ('Workout Routine', 'Structured push-pull-legs training log. Focused on progressive overload with compound barbell lifts. Tomorrow is pull day: pullups, barbell rows, and hammer curls.', '10/06/2026'),
        ('Book Summary', 'Key takeaways from "Atomic Habits" by James Clear. Focus on 1% daily improvement systems instead of relying on goals. Make good habits obvious, attractive, easy, and satisfying.', '09/06/2026'),
        ('Coding Refactor', 'Clean up component imports, move utility helper functions to a separate utils directory, and implement global error boundaries to prevent app crashes from database failures.', '08/06/2026'),
        ('Tokyo Trip Plan', 'Detailed vacation itinerary. Day 1: Exploring Shibuya and Harajuku. Day 2: Day trip to Mount Fuji. Remember to buy Shinkansen bullet train tickets online beforehand.', '07/06/2026'),
        ('React Native Guide', 'Deep dive into performance optimizations. Understanding VirtualizedList windowing, avoiding nested scrollviews, and utilizing React.memo on complex list item components.', '06/06/2026');
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
