import { relations } from "drizzle-orm";
import {
    pgTable,
    serial,
    timestamp,
    varchar,
    boolean,
} from "drizzle-orm/pg-core";


const user = pgTable("users", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    phone: varchar("contact_phone", { length: 255 }).notNull().unique(),
    email: varchar("email", { length: 255 }).notNull().unique(),
    address: varchar("address", { length: 255 }),
    createdAt: timestamp("created_at", { mode: "string" }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { mode: "string" }).notNull().defaultNow(),
});

export default user;