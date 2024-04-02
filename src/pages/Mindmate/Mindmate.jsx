import React from "react";
import Navbar from "../../component/Navbar";
import "./Mindmate.css";
import Button from "../../component/Button";
import Doctor from "../../assets/image/doctor.svg";
import Card from "../../component/Card";
export default function Home() {
    return (
        <>
            <Navbar />
            <div class="body1">
                <div class="paragraph">
                    <h2>Konseling menjadi makin mudah dengan Mindmate</h2>
                    <p>Mulai perjalanan kesehatan mental kamu dengan berbagi cerita di Mindmate dan pilih metode konseling chat terbaikmu sekarang !</p>
                    <Button name="Pilih Sekarang" width="165px"></Button>
                </div>
                <div class="img">
                    <img src={Doctor} alt="" />
                </div>
            </div>
            <div class="body2">
                <div class="sub-header">
                    <h2>Tersedia Metode Konseling Chat</h2>
                    <p>Kamu bisa memilih sesuai kebutuhan dan kenyamananmu.</p>
                </div>
                <div class="card">
                    <Card
                        header="Metode Konseling Chat"
                        harga="Rp35.000"
                        list1="Lama durasi konseling 30 menit"
                        list2="Pendampingan berkala selama 2 hari"
                        list3="Cocok untuk pertama kali konseling">
                    </Card>
                    <Card
                        header="Metode Konseling 
                        Chat"
                        harga="Rp35.000"
                        list1="Lama durasi konseling 30 menit"
                        list2="Pendampingan berkala selama 2 hari"
                        list3="Cocok untuk pertama kali konseling">
                    </Card>
                    <Card
                        header="Metode Konseling Chat"
                        harga="Rp145.000"
                        list1="Lama durasi konseling 120 menit"
                        list2="Pendampingan berkala selama 15 hari"
                        list3="Mendapatkan tips praktis dalam waktu singkat">
                    </Card>
                </div>
            </div>
        </>
    );
}
