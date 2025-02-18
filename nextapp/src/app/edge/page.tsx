export const dynamic = "force-static"; // Полностью отключает клиентский JS

export const runtime = "edge"; // Отключает JS
import {Test} from "@/app/text";

export default function Home() {
    return (
        <div>
            <h1> no js</h1>
            <Test/>
        </div>
    );
}
