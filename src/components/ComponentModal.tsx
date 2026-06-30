import { useState, useEffect } from "react"; 
import "./ComponentModal.css"; 

// Dit beschrijft hoe een component eruit ziet (de data die binnenkomt)
interface ComponentItem {
    id: number;
    name: string;
    preview: React.ReactNode; // de live preview die je ziet in de modal
    html?: string; 
    css?: string;
}

// Props die deze modal binnenkrijgt vanuit de pagina die hem gebruikt
interface Props {
    item: ComponentItem | null; // welk component getoond moet worden (null = modal dicht)
    onClose: () => void; // functie om de modal te sluiten
}

export default function ComponentModal({ item, onClose }: Props) {
    // welke tab is actief: html of css
    const [tab, setTab] = useState<"html" | "css">("html");
    // laat "Copied!" zien na het klikken op copy
    const [copied, setCopied] = useState(false);

    // elke keer als "item" verandert (modal open/dicht), reset states en blokkeer scrollen
    useEffect(() => {
        if (item) {
            setTab("html"); // begin altijd weer bij de html tab
            setCopied(false); // reset copy status
            document.body.style.overflow = "hidden"; // voorkomt scrollen achter de modal
        } else {
            document.body.style.overflow = ""; // scrollen weer aanzetten als modal dicht is
        }
        // cleanup: scrollen altijd terugzetten als component weg gaat
        return () => { document.body.style.overflow = ""; };
    }, [item]);

    // als er geen item is geselecteerd, render dan niks (modal is "dicht")
    if (!item) return null;

    // kies welke code getoond wordt op basis van de actieve tab
    const code = tab === "html"
        ? (item.html || "<!-- geen html beschikbaar -->")
        : (item.css || "/* geen css beschikbaar */");

    // kopieert de code naar het klembord en laat tijdelijk "Copied!" zien
    function handleCopy() {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // na 2 sec weer terug naar "Copy"
    }

    return (
        // overlay (achtergrond): klikken hierop sluit de modal
        <div className="cm-overlay" onClick={onClose}>
            {/* stopPropagation zorgt dat klikken IN de modal hem niet sluit */}
            <div className="cm-modal" onClick={e => e.stopPropagation()}>

                {/* header met titel en sluit-knop */}
                <div className="cm-header">
                    <span className="cm-title">{item.name}</span>
                    <button className="cm-close" onClick={onClose}>✕</button>
                </div>

                {/* live preview van het component */}
                <div className="cm-preview">
                    {item.preview}
                </div>

                {/* tabs om te wisselen tussen html en css, plus copy-knop */}
                <div className="cm-tabs">
                    <button className={`cm-tab ${tab === "html" ? "cm-tab--active" : ""}`} onClick={() => setTab("html")}>HTML</button>
                    <button className={`cm-tab ${tab === "css" ? "cm-tab--active" : ""}`} onClick={() => setTab("css")}>CSS</button>
                    <button className="cm-copy" onClick={handleCopy}>{copied ? "✓ Copied!" : "Copy"}</button>
                </div>

                {/* hier wordt de daadwerkelijke code getoond */}
                <div className="cm-code">
                    <pre><code>{code}</code></pre>
                </div>

            </div>
        </div>
    );
}