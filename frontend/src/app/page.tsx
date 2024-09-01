"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

export default function Home() {
    const [isDisabled, setIsDisabled] = useState(true);
    const [inputValue, setInputValue] = useState("Đi chơi tết");

    const handlePin = () => {
        setIsDisabled(!isDisabled);
    };

    const handleKeyDown = (e: any) => {
        if (e.key === "Enter" && !isDisabled) {
            handlePin();
        }
    };
    return (
        <main className="relative h-screen">
            <div className="flex w-full items-center fixed space-x-2 top-0 left-0 right-0 z-10 bg-slate-950 p-2">
                <Input
                    className={`placeholder: font-bold border-none ${
                        isDisabled ? "text-white  bg-slate-950" : ""
                    } !opacity-100 
                      
                    `}
                    placeholder="Chủ đề chính..."
                    value={inputValue}
                    disabled={isDisabled}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e)}
                />
                <Button onClick={handlePin} className="bg-slate-700">
                    {!isDisabled ? "Mở chủ đề mới này" : "Đóng chủ đề này"}
                </Button>
            </div>
            <div className="pt-16 bg-slate-100">
                <div className="render">
                    <div className="p-4 m-2 bg-white rounded-lg shadow-md max-w-max">
                        <div className="flex justify-right">
                            <div className="font-semibold text-gray-800">
                                Nghĩa{" "}
                                <span className="text-[10px] underline">
                                    14:32 PM
                                </span>
                            </div>
                        </div>
                        <div className="break-words">
                            xin chào các bạn thôi nhé anh bạn
                        </div>
                    </div>
                    <div className="p-4 m-2 bg-sky-200 rounded-lg shadow-md max-w-max ml-auto">
                        <div className="flex justify-end">
                            <div className="font-semibold text-gray-800">
                                Huy{" "}
                                <span className="text-[10px] underline">
                                    14:32 PM
                                </span>
                            </div>
                        </div>
                        <div className="break-words">Omg cái gì thế này?</div>
                    </div>
                </div>

                <div className="flex items-center space-x-2 p-2">
                    <Textarea
                        className="min-h-0"
                        placeholder="Nội dung bàn luận..."
                    />
                    <Button className="h-[58px]">Gửi</Button>
                </div>
            </div>
        </main>
    );
}
