function Card(){
    return(
        <div className="Card-Holder">
            <h1>Aymen</h1>
            <img src="./img/aymenbagdaddy.png" alt="aymenbagdaddy" />
            <h2>dit is Aymenbag</h2>
        </div>
    );
}

export function AymenCard() {
    return (
        <section>
            <Card/>
            <Card/>
            <Card/>
        </section>
    );
}


function Catcard() {
    return (
        <div className="Cat-card">
            <h1>The cutest cat</h1>
            <img src="./img/cats1.jpg" alt="cats" />
        </div>
    );
}

export default function Cats() {
    return (
        <section>
            <Catcard/>
        </section>
    );
}

function Check() {
    return (
        <ul className="checkboxes">
            <input className="checkbox" type="checkbox" id="checkbox1" value="1"/>
            <label for="checkbox1"> checkbox1</label> <br/>
            <input className="checkbox" type="checkbox" id="checkbox1" value="2"/>
            <label for="checkbox1"> checkbox1</label> <br/>
            <input className="checkbox" type="checkbox" id="checkbox1" value="3"/>
            <label for="checkbox1"> checkbox1</label> <br/>
            <input className="checkbox" type="checkbox" id="checkbox1" value="4"/>
            <label for="checkbox1"> checkbox1</label> <br/>
        </ul>
    );
}

export function Checklist() {
    return (
        <section>
            <Check/>
        </section>
    );
}