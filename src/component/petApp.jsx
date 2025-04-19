import React, { useState} from "react";
import { petlist } from "../data/petlist";


function PetApp() {
    const [pets, setPets] = useState(petlist);
    const [output, setOutput] = useState("");

// 2. Buat fungsi untuk menambah hewan peliharaan baru Esa, yaitu seekor badak Jawa dengan nama Rino yang pekerja keras. yang juga menjadi kesayangan esa
    const addPet = () => {const rhino = {
        jenis: "badak",
        ras: "Jawa",
        nama: "Rino",
        karakteristik: "pekerja keras",
        kesayangan: true,
        };setPets([...pets, rhino]);};
        
        console.log(addPet)
//   3. Buat fungsi untuk mengambil hewan kesayangan Esa secara descending dan ascending
    const Favorite = (order = "asc") => {
        const favs = pets.filter((p) => p.kesayangan);
        favs.sort((a, b) =>
            order === "asc"? a.nama.localeCompare(b.nama): b.nama.localeCompare(a.nama)
    );
    setOutput(JSON.stringify(favs, null, 2));};
//   4. Buat fungsi untuk mengganti kucing Persia menjadi kucing Maine Coon

    const RenamePetList = () => {
        const updated = pets.map(pet => {
            const newPet = { ...pet }; 
            if (newPet.ras === "Persia") {
            newPet.ras = "Maine Coon";
            }
            return newPet;});
            setPets(updated);
        };
console.log(petlist)
//   5. Buat fungsi untuk menghitung jumlah hewan peliharan esa sesuai dengan jenisnya
    const countType = () => {
    const hasil = {};
    for (let i = 0; i < pets.length; i++) {
        const jenis = pets[i].jenis;
        if (hasil[jenis]) {
        hasil[jenis]++;
        } else {
        hasil[jenis] = 1;
    }}
    setOutput(JSON.stringify(hasil, null, 2));
};
//   6. Buat fungsi untuk mengecek hewan peliharaan esa yang mengandung kata palindrome beserta panjang string dari namanya
    const cekPalindrome = () => {
    const isPalindrome = str =>
        str.toLowerCase() === str.toLowerCase().split('').reverse().join('');
        const result = pets
        .filter(p => isPalindrome(p.nama))
        .map(p => ({ nama: p.nama, panjang: p.nama.length }));
        setOutput(JSON.stringify(result, null, 2));
};
//   7. Buat fungsi untuk menjumlah bilangan genap dari array berikut [15,18,3,9,6,2,12,14] dan munculkan bilangan genap nya
    const EvenSum = () => {
        const numbers = [15, 18, 3, 9, 6, 2, 12, 14];
        let total = 0;
        let even = [];

        for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
        total += numbers[i];
        even.push(numbers[i]);
    }}
    setOutput(JSON.stringify({ even, total }, null, 2));
};
//   8. Buat fungsi dengan paramater yang di inisiasi sendiri untuk menentukan apakah dua string adalah anagram (memiliki huruf yang sama dengan jumlah yang sama, tetapi urutan berbeda).
const isAnagram = () => {
    const sortString = (str) => {
        return str.toLowerCase().split("").sort().join("");
    };

    const word1 = "listen";
    const word2 = "silent";

    if (sortString(word1) === sortString(word2)) {
        setOutput(`"${word1}" dan "${word2}" adalah anagram!`);
    } else {
        setOutput(`"${word1}" dan "${word2}" Bukan anagram.`);
    }
};

console.log(isAnagram)
//   9. Buatkan fungsi yang memformat json (assets/json/case.json) menjadi seperti (assets/json/expectation.json)

// chatGPT, mengubah format dari object di javascrpit
const formatJson = () => {
    const caseData = {
        data: [
            { category: "Buah", code: "B001", name: "Apel", total: 10 },
            { category: "Hewan", code: "H002", name: "Buaya", total: 10 },
            { category: "Hewan", code: "H001", name: "Kucing", total: 30 },
            { category: "Buah", code: "B002", name: "Pepaya", total: 20 },
            { category: "Buah", code: "B001", name: "Anggur", total: 5 },
            { category: "Buah", code: "B002", name: "Pisang", total: 8 },
            { category: "Hewan", code: "H002", name: "Komodo", total: 15 },
            { category: "Sayuran", code: "S003", name: "Wortel", total: 25 },
            { category: "Hewan", code: "H001", name: "Harimau", total: 10 },
            { category: "Sayuran", code: "S001", name: "Bayam", total: 12 },
            { category: "Sayuran", code: "S002", name: "Kangkung", total: 18 }
        ]
    };

    const grouped = {};
    let totalAll = 0;

    caseData.data.forEach(item => {
        totalAll += item.total;

        if (!grouped[item.category]) {
            grouped[item.category] = {
                category: item.category,
                total: 0,
                data: {}
            };
        }

        if (!grouped[item.category].data[item.code]) {
            grouped[item.category].data[item.code] = {
                total: 0,
                data: []
            };
        }

        grouped[item.category].data[item.code].data.push({
            name: item.name,
            total: item.total
        });

        grouped[item.category].total += item.total;
        grouped[item.category].data[item.code].total += item.total;
    });

    const result = {
        total: totalAll,
        data: Object.values(grouped)
    };

    setOutput(JSON.stringify(result, null, 2));
};

    return (
        <div className="min-h-screen px-10 py-10 bg-[#0a1930]">
            <h1 className="text-4xl font-bold text-center text-teal-200 mb-10">
                Esa Pet Management</h1> <br />
                
            <div className="flex justify-center mb-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full max-w-6xl">
                    <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded w-full" onClick={addPet}>
                        Tambah Pet
                    </button>
                    <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded w-full" onClick={() => Favorite("asc")}>
                        Favorite Asc
                    </button>
                    <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded w-full" onClick={() => Favorite("desc")}>
                        Favorite Desc
                    </button>
                    <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded w-full" onClick={RenamePetList}>
                        Maine Coone
                    </button>
                    <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded w-full" onClick={countType}>
                        Count Type
                    </button>
                    <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded w-full" onClick={cekPalindrome}>
                        Cek Palindrome
                    </button>
                    <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded w-full" onClick={EvenSum}>
                        Total
                    </button>
                    <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded w-full" onClick={isAnagram}>
                        Cek Anagram
                    </button>
                    <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded w-full" onClick={formatJson}>
                        Format JSON
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {pets.map((p, i) => (<div key={i}
                className="border border-teal-300 rounded-2xl p-4 bg-teal-800/50 backdrop-blur-sm text-teal-200">
                <h2 className="text-lg font-bold mb-2 text-center">{p.nama}</h2>
                <p className="text-sm">
                    <span className="font-semibold">Jenis:</span> {p.jenis}
                </p>
                <p className="text-sm">
                    <span className="font-semibold">Ras:</span> {p.ras}
                </p>
                <p className="text-sm">
                    <span className="font-semibold">Karakteristik:</span> {p.karakteristik}
                </p>
            </div>
        ))}
        </div>
        <h2 className="text-xl font-semibold my-10 text-teal-200">Output</h2>
        <pre className="bg-teal-900 text-teal-200 text-sm p-4 rounded border border-teal-300 overflow-x-auto">
        {output}
        </pre>
    </div>
);
}

export default PetApp;
