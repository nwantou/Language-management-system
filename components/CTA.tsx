import Image from "next/image";
import Link from "next/link";

const Cta = () => {
    return (
        <section className="cta-section">
            <div className="cta-badge">Commencez à apprendre à votre manière.</div>
            <h2 className="text-3xl font-bold">
                Créez et personnalisez votre Companion d apprentissage
            </h2>
            <p>Choisissez un nom, une matière, une voix et une personnalité — et commencez à apprendre grâce à des conversations vocales qui se sentent naturelles et amusantes.</p>
            <Image src="images/cta.svg" alt="cta" width={362} height={232} />
            <button className="btn-primary">
                <Image src="/icons/plus.svg" alt="plus" width={12} height={12}/>
                <Link href="/companions/new">
                    <p>Créez un nouveau Companion</p>
                </Link>
            </button>
        </section>
    )
}
export default Cta
