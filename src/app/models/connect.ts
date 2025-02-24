import "reflect-metadata";
import { DataSource } from "typeorm";
import {Category} from "@/app/models/entities/Category";
import {Attribute} from "@/app/models/entities/Attribute";
import {Product} from "@/app/models/entities/Product";
import {Voucher} from "@/app/models/entities/Voucher";
import {UserVoucher} from "@/app/models/entities/UserVoucher";
import {LuckyDraw} from "@/app/models/entities/LuckyDraw";
import {LuckyDrawItem} from "@/app/models/entities/LuckyDrawItem";
import {System} from "@/app/models/entities/System";
import {User} from "@/app/models/entities/User";
import {UserView} from "@/app/models/entities/UserView";
import {Image} from "@/app/models/entities/Image";
import {Banner} from "@/app/models/entities/Banner";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: Number(process.env.DATABASE_PORT) || 3306,
    username: "root",
    password: "",
    database: process.env.DATABASE_NAME,
    entities: [Category, Attribute, Product, Voucher, UserVoucher, LuckyDraw, LuckyDrawItem, System, UserView, User, Image, Banner],
    synchronize: true,
    logging: true,
});

export const connectDB = async (entity: any) => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize()
            .then(() => console.log("✅ TypeORM đã kết nối tới database!"))
            .catch((err) => console.error("❌ Lỗi kết nối:", err));
    }
    return AppDataSource.getRepository(entity)
};
