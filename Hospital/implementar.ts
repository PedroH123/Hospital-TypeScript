namespace Hospital{
    let hospital = new Hospital();
    hospital.setNome("Sírio Libanes");

    let medico = new Medico();
    medico.setNome("Kirb");
    medico.setCodFuncionario(1);
    medico.setCpf("000.000.000-00");
    medico.setCrm(11111);
    medico.setEspecialidade(5);


    let medico2 = new Medico();
    medico.setNome("Link");
    medico.setCodFuncionario(2);
    medico.setCpf("111.000.000-11");
    medico.setCrm(22222);
    medico.setEspecialidade(10);

     let medico3 = new Medico();
    medico.setNome("Sonic");
    medico.setCodFuncionario(3);
    medico.setCpf("222.000.000-22");
    medico.setCrm(33333);
    medico.setEspecialidade(2);


    let enfermeiro = new Enfermeiro();
    enfermeiro.setNome("Kirb");
    enfermeiro.setCodFuncionario(1);
    enfermeiro.setCpf("000.000.000-00");
    enfermeiro.setCoren(11111);


    let enfermeiro2 = new Enfermeiro();
    enfermeiro2.setNome("Link");
    enfermeiro2.setCodFuncionario(2);
    enfermeiro2.setCpf("111.000.000-11");
    enfermeiro2.setCoren(22222);

     let enfermeiro3 = new Enfermeiro();
    enfermeiro3.setNome("Sonic");
    enfermeiro3.setCodFuncionario(3);
    enfermeiro3.setCpf("222.000.000-22");
    enfermeiro3.setCoren(33333);


    let paciente = new Paciente();
    paciente.setNome("Kirb");
    paciente.setCodPaciente(1);
    paciente.setCpf("000.000.000-00");


    let paciente2 = new Paciente();
    paciente2.setNome("Link");
    paciente.setCodPaciente(2);
    paciente2.setCpf("111.000.000-11");

     let paciente3 = new Paciente();
    paciente3.setNome("Sonic");
    paciente3.setCodPaciente(3);
    paciente3.setCpf("222.000.000-22");


    hospital.addEnfermeiro(enfermeiro);
        hospital.addEnfermeiro(enfermeiro2);
    hospital.addEnfermeiro(enfermeiro3);

    hospital.addMedico(medico);
        hospital.addMedico(medico2);
    hospital.addMedico(medico3);

    hospital.addPaciente(paciente);
        hospital.addPaciente(paciente2);
    hospital.addPaciente(paciente3);



    //implementação de tabela

    let tabela1 = document.getElementById("tabela1");

    let conteudo1 = "<tr><th>Nome</th> <th>Cpf</th>  <th>Codigo</th> <th>Crm</th> <th>Especialidade</th> </tr>";
    hospital.getMedico().forEach(element => {
        conteudo1 += "<tr><td>"+element.getNome()+"</td><td>"+element.getCpf()+"</td><td>"+element.getCodFuncionario()+"</td><td>"+element.getCrm()+"</td><td>"+element.getEspecialidade()+"</td></tr>";
    })
    tabela1.innerHTML = conteudo1;
//------------------------------------------------------------//
        let tabela2 = document.getElementById("tabela2");

    let conteudo2 = "<tr><th>Nome</th> <th>Cpf</th>  <th>Codigo</th> <th>Coren</th> </tr>";
    hospital.getEnfermeiro().forEach(element => {
        conteudo1 += "<tr><td>"+element.getNome()+"</td><td>"+element.getCpf()+"</td><td>"+element.getCodFuncionario()+"</td><td>"+element.getCoren()+"</td></tr>";
    })
    tabela2.innerHTML = conteudo2;

    //------------------------------------------------------------//
        let tabela3 = document.getElementById("tabela3");

    let conteudo3 = "<tr><th>Nome</th>  <th>Cpf</th> <th>Codigo</th> </tr>";
    hospital.getPaciente().forEach(element => {
        conteudo3 += "<tr><td>"+element.getNome()+"</td><td>"+element.getCpf()+"</td><td>"+element.getCodPaciente()+"</td></tr>";
    })
    tabela3.innerHTML = conteudo3;


}