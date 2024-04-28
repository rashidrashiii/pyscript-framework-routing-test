
/**
 * WARNING: Do not remove the commented annotations above and below the classes.
 * They are used by the script to identify class definitions.
 */


//@ dashboardcomponent start
class DashboardComponent extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
                <h1>Dashboard page</h1>
<button onclick="navigateToPage('footer')">Footer</button> 
                <script src="C:\Users\MuhammedRashidV\Documents\python\todoApp/assets/scripts/script.js"></script>
            <script src="C:\Users\MuhammedRashidV\Documents\python\todoApp/assets/scripts/routing-script.js"></script>
        `;
    }
}

customElements.define('dashboard-component', DashboardComponent);

//@ dashboardcomponent end


//@ footercomponent start
class FooterComponent extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
                <h1>This is the footer</h1>
                <script src="C:\Users\MuhammedRashidV\Documents\python\todoApp/assets/scripts/script.js"></script>
            <script src="C:\Users\MuhammedRashidV\Documents\python\todoApp/assets/scripts/routing-script.js"></script>
        `;
    }
}

customElements.define('footer-component', FooterComponent);

//@ footercomponent end


//@ headercomponent start
class HeaderComponent extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
                <h1>This is the header</h1>
<button onclick="navigateToPage('dashboard')">Dashboard</button>  
<div id="my-div">Initial content</div>
<button py-click="btn_click">Click here</button>
<script type="py" src="./components/header.py"></script>
                <script src="C:\Users\MuhammedRashidV\Documents\python\todoApp/assets/scripts/script.js"></script>
            <script src="C:\Users\MuhammedRashidV\Documents\python\todoApp/assets/scripts/routing-script.js"></script>
        `;
    }
}

customElements.define('header-component', HeaderComponent);

//@ headercomponent end
