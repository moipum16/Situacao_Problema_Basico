let Participantes=new Array;
let DiaPadrao="08";
let MesPadrao="09";
let IdadeMinimia="18";
let checkpoint1=false;
let MaxParticipantes=parseInt(100);

do{
    
    checkpoint1=false;
    window.alert("Data do evento programada para: "+DiaPadrao +"/" +MesPadrao);
    
    let Nome=null;

    while(!Nome){Nome=(prompt("Digite seu nome: "));}

    let Dia=parseInt(prompt("Digite o dia de hoje: "));
    let Mes=parseInt(prompt("Digite o mês atual: "));
    
    if((Mes)>(MesPadrao)||(Dia)>=(DiaPadrao)||!Mes||!Dia){
        window.alert("Não é possível se cadastrar no evento, pois o mesmo já ocorreu.");
    }
    else{let Idade=parseInt(prompt("Digite sua idade: "));
    
    if(Idade<IdadeMinimia||!Idade){window.alert("Não é possível se cadastrar no evento, pois a idade mímima para participar é de "+IdadeMinimia); }else checkpoint1=true
}

    if(checkpoint1==true){
        if(parseInt(Participantes.length)>MaxParticipantes){window.alert("Número de vagas esgotado.");}
        else{Participantes[Participantes.length]=[Nome];
            window.alert("Cadastro efetuado com sucesso! Lista de participantes: "+ Participantes);
        }
    }
}while(Participantes.length<=MaxParticipantes);
