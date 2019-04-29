function ValidaSoma() {

    if(document.frm_venda.nome.value=="") {
        alert("Por favor, preencha o campo nome.");
        document.frm_venda.nome.focus();
        return false;
    }

    if(document.frm_venda.email.value=="") {
        alert("Por favor, preencha o campo email.");
        document.frm_venda.email.focus();
        return false;
    }

    if (document.frm_venda.ps4.checked==false & 
        document.frm_venda.xbox.checked==false & 
        document.frm_venda.pc.checked==false & 
        document.frm_venda.wii.checked==false) {
            alert("Por favor, selecione ao menos 1 console.");
            document.frm_venda.nome.focus();
            return false;
    }

    if(document.frm_venda.mes.value=="0") {
        alert("Por favor, selecione o mês do seu aniversário.");
        document.frm_venda.mes.focus();
        return false;
    }

    if(document.frm_venda.captcha.value!="8") {
        alert("O código de verificação está incorreto.");
        document.frm_venda.nome.focus();
        return false;
    }
    

}