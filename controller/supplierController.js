// เป็นไฟล์ที่จัดการ (เพิ่ม/ลบ/แก้ไข/ค้นหา,ดู,ตรวจสอบ) กับข้อมูลใน table ใน database
// ใช้คู่กับไฟล์ประเภท model ที่เป็นไฟล์ที่จัดการกับข้อมูลใน table ใน database โดยตรง
// โดยที่เราจะเรียกใช้งาน ไฟล์นี้ ในไฟล์ router ด้วยคำสั่ง require('./controller/supplierController')

import Supplier from "../models/supplierModel.js";

export const getAllSupplier = async (req, res) => {
  try {
    // คำสั่งเอาข้อมูลทั้งหมดจาก table ที่กำหนด มาเก็บไว้ในตัวแปร supplier
    const supplier = await Supplier.findAll();
    res.json(supplier);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getSupplierBySupplierId = async (req, res) => {
  try {
    // คำสั่งเอาข้อมูลที่มี id ตรงกับที่รับมาจาก url มาเก็บไว้ในตัวแปร supplier
    const supplier = await Supplier.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(supplier);
  } catch (error) {
    res.json({ message: error.message });
  }
};