class UmarElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = "Umar was here";
    }
}

customElements.define("x-umar", UmarElement);

class CenterElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `<div style ="text-align:center">${this.innerHTML}</div>`;
    }
}

customElements.define("x-center", CenterElement);

class YearElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-fullyear", YearElement);