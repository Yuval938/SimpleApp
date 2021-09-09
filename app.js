const app = Vue.createApp({
  data() {
    return { 
      enteredContinentValue: '',
      continents: ["All","Africa","Asia","Europe"],
      countrylist:[],
      enteredCountryValue:'',
      submitedCountryValue:'',
      countryWindow:false,
      detailsAreVisible:false,
      borders:"",
      capital:""
     };
  },
  methods: {
    ContinentSelection(event) {
      /*fetch states by continent  --
      here we should have a GET request to backend server in order to fetch the list.
      this should eliminate the need for these "else if's*/
      // $.get("http://127.0.0.1:5000/all",function(data,status){
     this.enteredContinentValue = event.target.value;
     //fetch country by continent
     if (this.enteredContinentValue==="Asia"){
       
      this.countrylist = asia
     }
     else if (this.enteredContinentValue==="Europe"){
       
      this.countrylist = europe
     }
     else if (this.enteredContinentValue==="Africa"){
       
      this.countrylist = africa
     }
     else if (this.enteredContinentValue==="All"){
       
      this.countrylist = all
     }

    },
    CountrySelection(event) {
      this.enteredCountryValue = event.target.value;
     },
       onSubmit(event){
      event.preventDefault();
      this.submitedCountryValue = event.target.elements.country.value;
      this.countryWindow=true;
      //now we should talk to our server again for info..
      //dummy data for now
      let obj = countryDetails.find(o => o.name === this.submitedCountryValue);
      this.capital=obj.Capital;
      this.borders=obj.Borders;

    },
    toggle(){
      this.detailsAreVisible = !this.detailsAreVisible;
    }
  }
});

app.mount('#simple-app');


//dummy data:

var all = ["Italy","Spain","Israel","Nigeria","Egypt","China","India"];
var europe =["Italy","Spain"];
var asia = ["Israel","China","India"];
var africa = ["Nigeria","Egypt"];
var countryDetails=[{name:"Italy",Capital:"Rome",Borders:"AUT,FRA,SMR,SVN,CHE,VAT"},
                    {name:"Spain",Capital:"Madrid",Borders:"AND,FRA,GIB,PRT,MAR"},
                     {name:"Israel",Capital:"Jerusalem",Borders:"EGY,JOR,LBN,SYR"},
                    {name:"Nigeria",Capital:"Abuja",Borders:"BEN,CMR,TCD,NER"},
                    {name:"Egypt",Capital:"Cairo",Borders:"ISR,LBY,SDN"},
                    {name:"China",Capital:"Beijing",Borders:"AFG,BTN,MMR,HKG,IND,KAZ,PRK,KGZ,LAO,MAC,MNG,PAK,RUS,TJK,VNM"},
                   {name:"India",Capital:"New Delhi",Borders:"AFG,BGD,BTN,MMR,CHN,NPL,PAK,LKA"}];