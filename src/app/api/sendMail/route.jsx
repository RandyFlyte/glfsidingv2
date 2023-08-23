import { sendMail } from "@/util/mailService";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    try {
        const formData = await req.formData();
        const name = formData.get("customer-name");
        const email = formData.get("email");
        const message = formData.get("message");

        await sendMail(name, email, message);
    } catch (err) {
        res.status(400).json({
            error_code: "api_one",
            message: err.message,
        });
    }
    return NextResponse.json(res);
}
