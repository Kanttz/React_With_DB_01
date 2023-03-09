// ไฟล์นี้ใช้สำหรับเชื่อมต่อกับฐานข้อมูล

import { Sequelize } from "sequelize";
const dbconnect = new Sequelize(
  "dti_stock_db", // ชื่อฐานข้อมูล
  "root", // ชื่อผู้ใช้
  "", // รหัสผ่าน
  {
    host: "localhost", // ชื่อโฮสต์
    dialect: "mysql", // ชนิดของฐานข้อมูล
  }
);

export default dbconnect;
