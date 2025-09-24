function calculateBMI () {
    const peso = document.getElementById("weight").value;
    const altura = document.getElementById('height').value;
    let bmi = (peso /((altura*altura)/10000)).toFixed(2);
    console.log(bmi);
    
    return bmi;
}
function idealBodyweight () {
    const peso = document.getElementById("weight").value;
    const altura = document.getElementById('height').value;
    const sexo = document.getElementById('sex');
    
    let ibw = 0;
    if (sexo.value === 'Male'){
    ibw = ((50+0.91*((altura)-150)).toFixed(2))
    console.log("ideal body weight:"+ibw)
    
    return ibw;
}
    else{
        ibw = ((45+0.91*((altura)-150)).toFixed(2))
        console.log("ideal body weight:"+ibw)
        
        return ibw;
    }
    

}
function parenteralIrondose() {
    
    if (validateForm() !== false) {
        const haemoglobin = Number(document.getElementById("Hb").value);
        const ironDoseresult = document.getElementById("ironDose");
        const peso = document.getElementById("weight").value;
        const IBW = document.getElementById('IBW');
        const bmiResult = document.getElementById('BMI');
        let ironDose='tu puta madre';
        var bmi = calculateBMI();
        var ibw =idealBodyweight();
        IBW.textContent=('IBW: '+String(ibw)+'kg');
        bmiResult.textContent=('BMI: '+ String(bmi)+'kg/m2');
    
        console.log('the bmi is '+bmi);
        console.log('the ibw is '+ibw);
        if (bmi > 30) {
            ironDose = Math.min(20*ibw,Math.max(500,(((120 - haemoglobin) * ibw * 0.24) + 500).toFixed(0)));
            let roundedDose =  Math.round(ironDose/100)*100;
            console.log(ironDose);
            console.log(roundedDose);
            ironDoseresult.textContent=('Iron Dose: '+ String(roundedDose)+'mg');
        }
        else {
            ironDose = Math.min(20*peso,Math.max(500,(((120 - haemoglobin) * peso * 0.24) + 500).toFixed(0)));
            let roundedDose =  Math.round(ironDose/100)*100;
            console.log(ironDose);
            console.log(roundedDose);
            ironDoseresult.textContent=('Iron Dose: '+ String(roundedDose)+'mg');
        }
    }
    else {
        console.log(`missing field value`);
        document.getElementById("IBW").textContent=("");
        document.getElementById('BMI').textContent=("");
        document.getElementById("ironDose").textContent=("");
    }  
    }
   


function getAge() {
    const fechaDenacimiento = document.getElementById('Month').value+"-"+document.getElementById('Day').value+"-"+document.getElementById('Year').value;
    const dateOfbirth = new Date(fechaDenacimiento);
    console.log(dateOfbirth);
    const hoy = new Date();
    let edad = hoy.getFullYear() - dateOfbirth.getFullYear();
    console.log(edad);
    return edad;
}
function weighForcalculation(){
    const peso = Number(document.getElementById('weight').value);
    var ibw = Number(idealBodyweight());
    console.log(typeof(ibw));
    console.log(peso-ibw);
    console.log(0.4*(peso-ibw))
    console.log((ibw)+(0.4*(peso-ibw)))
    ibw/peso < 0.7
    ? formulaWeight = Number(ibw/1 + 0.4*(peso-ibw/1))
    : formulaWeight = peso;
    console.log(formulaWeight);
    return formulaWeight;
    
}

function cockroftAndgault(edad, peso, serumCreatinine, constant) {
    let creatClearance = ((140-edad)*peso*constant)/serumCreatinine;
    console.log(creatClearance);
    return creatClearance;
}
function calculateRenalfunction () {
    
    if (validateForm() !== false) {
        const peso = Number(document.getElementById('weight').value);
        const crclEntry = document.getElementById("creatinineClearance");
        const weightEntry = document.getElementById("pesoUsado");
        var edad = getAge();
        console.log('tengo '+ edad);
        
        const serumCreatinine = Number(document.getElementById('Scr').value);
        const sexo = document.getElementById('sex');
        var formulaWeight = weighForcalculation();
        sexo.value === 'Male'
        ? crCl = cockroftAndgault(edad, formulaWeight, serumCreatinine, 1.23)
        : crCl = cockroftAndgault(edad, formulaWeight, serumCreatinine, 1.04);
            
        console.log(crCl+"mL/min");
        formulaWeight !== peso
        ? weightEntry.textContent=(`Weight used: Adjusted body weight ${formulaWeight.toFixed(2)} kg`)
        : weightEntry.textContent=(`Weight used: ${formulaWeight.toFixed(2)} kg`);
        crclEntry.textContent=(`Crcl: ${crCl.toFixed(2)}mL/min`);

    }
   else {
    console.log('missing entry field data');
    document.getElementById("pesoUsado").textContent=("");
    document.getElementById("creatinineClearance").textContent=("");
   }
}
function CopyToClipboard(id){
    var r = document.createRange();
    r.selectNode(document.getElementById(id));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    try {
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        console.log('Successfully copy text: hello world ' + r);
        
    } catch (err) {
        console.log('Unable to copy!');
        
    }
}
function CopyResultsToClipboard(id){
    const resultado = document.getElementById(id).textContent;
    console.log(resultado)
    var blob = new Blob([resultado], {type: 'text/plain'});
    const item= new ClipboardItem({'text/plain': blob})
    navigator.clipboard.write([item]);
    alert('texto copiado ' + resultado);
    
}

function validateForm()                                 
         { 
          const namef = document.querySelectorAll('input');
          console.log(namef)
          for (let i of namef) {         
             if (i.offsetParent !== null && i.style.display !== 'none' && i.value.trim() === ""){ 
                 i.placeholder = "Please enter a value";
                 i.style.border ="2px solid red"  
                 i.focus(); 
                 return false; 
             }else{
                 i.innerHTML="";
                 i.style.border =""  
             }
         }
        }
         
           
        function CalculationChoice()
        {
            const IV = document.getElementById("IV")
            const EyeDrops = document.getElementById("eye drops")
            const liquid = document.getElementById("liquid vs PO")
            var choice = document.getElementById("calculation");
            console.log(choice.value)
            if (choice.value === "Single Use Eye Drops vs Preservative Free"){
                
                console.log(EyeDrops.textContent);
                EyeDrops.style.display = "block";
                IV.style.display = "none";
                liquid.style.display="none";
            } else if (choice.value === "Oral liquid vs tablet/capsule"){
                console.log(liquid.textContent);
                 EyeDrops.style.display = "none";
                IV.style.display = "none";
                liquid.style.display="block";
        } else {
;
                console.log(IV.textContent)
                EyeDrops.style.display = "none";
                IV.style.display = "block";
                liquid.style.display="none";
        }
        
        }
        function CalculateCO2() {
            const CO21 = document.getElementById("CO2 1")
            const CO22 = document.getElementById("CO2 2")
            const CO2Saving = document.getElementById("CO2 saving")
            if (validateForm() !== false){
            estimateCO2()}
    else {
        alert(`missing field value`);
        CO21.textContent=("");
        CO22.textContent=("");
        CO2Saving.textContent=("");
    }  
 
}

function normaliseData(dataPoint) {
    if (dataPoint < 1) {
       let NewdataPoint = dataPoint*1000
       console.log(NewdataPoint)
       return NewdataPoint;
       
    }
    else{
        console.log(dataPoint)
        return dataPoint
    }
}

function estimateCO2 () {
            const CO2Plastic = 0.006
            const CO2EyeDropper = 6.5
            const CO2Tablet = 0.038
            const CO2OralSolution = 0.151
            const CO2RTABag = 0.31
            const CO2GlassVial = 0.63
            const CO21 = document.getElementById("CO2 1")
            const CO22 = document.getElementById("CO2 2")
            const CO2Saving = document.getElementById("CO2 saving")
            
            let choice = document.getElementById("calculation");
            console.log(choice.value)
            if (choice.value === "Single Use Eye Drops vs Preservative Free"){
                const quantity = Number(document.getElementById("quantity").value)
                const pack_size = Number(document.getElementById("pack_size").value)
                let CO2Option1 = quantity*pack_size*CO2Plastic
                let CO2Option2 = (quantity*CO2EyeDropper)*CO2Plastic
                let CO2difference = CO2Option1-CO2Option2;
                console.log(CO2Option1, CO2Option2, CO2difference)
                CO21.textContent=(`CO2 Option 1: ${CO2Option1.toFixed(2)}kg`)
                CO22.textContent=(`CO2 Option 2: ${CO2Option2.toFixed(2)}kg`)
                CO2Saving.textContent=(`CO2 Saving: ${CO2difference.toFixed(2)}kg`)
            } else if (choice.value === "Oral liquid vs tablet/capsule"){
                const volumen = Number(document.getElementById("volume").value)
            let concentration = Number(document.getElementById("concentration").value)
            const quantityLiquid = Number(document.getElementById("quantityLiquid").value)
            concentration= normaliseData(concentration);
                let CO2Option1 = (volumen/(1000/(concentration/5)))*quantityLiquid*CO2OralSolution
                let CO2Option2 = (volumen/(1000/(concentration/5)))*quantityLiquid*CO2Tablet
                let CO2difference = CO2Option1-CO2Option2;
                console.log(CO2Option1, CO2Option2, CO2difference)
                CO21.textContent=(`CO2 Option 1: ${CO2Option1.toFixed(2)}kg`)
                CO22.textContent=(`CO2 Option 2: ${CO2Option2.toFixed(2)}kg`)
                CO2Saving.textContent=(`CO2 Saving: ${CO2difference.toFixed(2)}kg`)
        } else if  (choice.value === "IV RTA bag vs tablet/capsule") {
            let quantyComp = Number(document.getElementById("quantitative composition").value)
            const quantityIV = Number(document.getElementById("quantityIV").value)
            quantyComp =normaliseData(quantyComp)
                let CO2Option1 = (quantyComp/1000)*quantityIV*CO2RTABag
                let CO2Option2 = (quantyComp/1000)*quantityIV*CO2Tablet
                let CO2difference = CO2Option1-CO2Option2;
                console.log(CO2Option1, CO2Option2, CO2difference)
                CO21.textContent=(`CO2 Option 1: ${CO2Option1.toFixed(2)}kg`)
                CO22.textContent=(`CO2 Option 2: ${CO2Option2.toFixed(2)}kg`)
                CO2Saving.textContent=(`CO2 Saving: ${CO2difference.toFixed(2)}kg`);}
        
        else {
            let quantyComp = Number(document.getElementById("quantitative composition").value)
            const quantityIV = Number(document.getElementById("quantityIV").value)
            quantyComp =normaliseData(quantyComp)
                let CO2Option1 = (quantyComp/1000)*quantityIV*CO2GlassVial
                let CO2Option2 = (quantyComp/1000)*quantityIV*CO2Tablet
                let CO2difference = CO2Option1-CO2Option2;
                console.log(CO2Option1, CO2Option2, CO2difference)
                CO21.textContent=(`CO2 Option 1: ${CO2Option1.toFixed(2)}kg`)
                CO22.textContent=(`CO2 Option 2: ${CO2Option2.toFixed(2)}kg`)
                CO2Saving.textContent=(`CO2 Saving: ${CO2difference.toFixed(2)}kg`);}

}        
function GHGCalculatorDisclaimer() {
    if (document.title === 'Greenhouse Gas Calculator'){

    
const disclaimer = document.getElementById('myModal');
disclaimer.style.display ="block";
const span = document.getElementsByClassName("close")[0]
span.onclick = function() {disclaimer.style.display = "none";
}
}
        else{
            console.log(document.title)
        }
    }

    window.addEventListener('load', GHGCalculatorDisclaimer) 