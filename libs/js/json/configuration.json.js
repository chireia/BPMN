Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"BPMN - KaBuM!","publishDate":"07/09/2018 21:35:33","pages":[{"id":"0b12f706-fab3-433c-815e-7d4a4bb0d289","name":"BPMN - KaBuM!","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">O processo mapeia todo o passo a passo de uma compra em um e-commerce, neste caso a kabum.com.br, dos itens selecionados at&eacute; seu despacho na transportadora.<br/><br/>Levamos em conta o cliente como parte do processo principal, onde todas as tarefas do tipo &quot;Usu&aacute;rio&quot; refenre-se &agrave; uma a&ccedil;&atilde;o do cliente.</span></p>","version":"16.2.1.65b","author":" Erik Santos, Fábio Cansado e Rodrigo Chireia","image":"files\\diagrams\\BPMN___KaBuM.png","isSubprocessPage":false,"properties":[],"elements":[{"id":"c8da02e6-6d9b-4278-8d47-ece09034ea25","name":"KaBuM!","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":969.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"1dc722e6-ad3c-4bfe-98bc-cce0e331486f","name":"Fim da seleção dos Produtos","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":139.0,"y":132.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"54fc4205-7df4-4567-9804-02e2779c615a","name":"Acessar Carrinho do Site","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":218.0,"y":117.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","properties":[]},{"id":"a8528c4d-8bae-4368-a279-d37643233f11","name":"Preencher CEP","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":348.0,"y":117.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","properties":[]},{"id":"3b8ed001-9e07-49a6-97ca-45f9540a85a6","name":"Escolher Frete","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":482.0,"y":117.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","properties":[]},{"id":"b39f49e9-aad9-4433-b5a2-485d1068f4c9","name":"Fechar pedido","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":613.0,"y":117.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","properties":[]},{"id":"7334ee47-f00d-4de5-a623-5bb6eaf56956","name":"Identificação","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":745.0,"y":127.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não Cadastrado","elementType":"SequenceFlow","properties":[]},{"name":"Não Logado","elementType":"SequenceFlow","properties":[]},{"name":"Já Logado","elementType":"SequenceFlow","properties":[]}]},{"id":"6e90cc2e-b4d7-4fe7-8b7e-437aca48ec71","name":"Realizar cadastro","elementImage":"files\\bpmnElements\\SubProcess.png","imageBounds":{"points":[{"x":881.0,"y":209.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"isPublished":true,"elementType":"SubProcess","properties":[]},{"id":"2eeb09ce-5a81-4d89-9059-fd7e9b25b25e","name":"Realizar login","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":881.0,"y":117.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","properties":[]},{"id":"89cc519b-9f90-44cf-bb2e-d2193fbe2bda","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1055.0,"y":127.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Escolher Forma de Pagamento","elementType":"SequenceFlow","properties":[]}]},{"id":"97d5ac86-cc3f-473b-82b9-e3654738d97a","name":"Evento de Erro","elementImage":"files\\bpmnElements\\ErrorIntermediate.png","imageBounds":{"points":[{"x":1510.0,"y":575.0}],"radius":11.0,"height":22.0,"width":22.0,"shape":"circle"},"elementType":"ErrorIntermediate","properties":[{"id":"ErrorCode","name":"Código de erro","type":"text"}]},{"id":"4b117b80-f135-4852-9dc6-4309fba9f147","name":"Escolher Forma de Pagamento","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":1152.0,"y":117.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","properties":[]},{"id":"1539f932-ec68-4324-b143-ec990e84e187","name":"Pagamento Selecionado","elementImage":"files\\bpmnElements\\MessageIntermediate_Catch.png","imageBounds":{"points":[{"x":1182.0,"y":480.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"MessageIntermediate"},{"id":"69b87a4a-994e-46e7-ba22-6a41b3361482","name":"Forma de Pagamento?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1301.0,"y":475.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Cartão de Crédito","elementType":"SequenceFlow","properties":[]},{"name":"Boleto","elementType":"SequenceFlow","properties":[]}]},{"id":"ed76063f-25c9-4fb8-8d7d-5fdb5e8f944d","name":"Aceitar Termos  e Condições","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":1383.0,"y":400.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","properties":[]},{"id":"045a57fe-1c94-4c1b-8537-f5526f777eb6","name":"Gerar Boleto","elementImage":"files\\bpmnElements\\BusinessRuleTask.png","imageBounds":{"points":[{"x":1519.0,"y":400.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"BusinessRuleTask","properties":[]},{"id":"bac2d1de-6b7e-4616-95da-19f62474a384","name":"Enviar Boleto","elementImage":"files\\bpmnElements\\MessageIntermediate_Throw.png","imageBounds":{"points":[{"x":1643.0,"y":415.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"MessageIntermediate"},{"id":"f2394003-6863-4168-a0b5-aae244cfcf38","name":"Aguardar pagamento do Boleto","elementImage":"files\\bpmnElements\\ScriptTask.png","imageBounds":{"points":[{"x":1723.0,"y":400.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ScriptTask","properties":[]},{"id":"755da18a-c76b-42f5-b893-9a7435f4455a","name":"Informar Dados do Cartão","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":1387.0,"y":537.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","properties":[]},{"id":"05064ff4-f71f-41c6-a87e-03d16d866bc0","name":"Processar Pagamento","elementImage":"files\\bpmnElements\\ScriptTask.png","imageBounds":{"points":[{"x":1522.20007,"y":537.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ScriptTask","properties":[]},{"id":"3915a771-c9b1-4127-8147-3cf47e0d1bd1","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1833.0,"y":475.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Portão","elementType":"SequenceFlow","properties":[]}]},{"id":"ed034549-d90e-47c5-8c56-c142631f4511","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":2009.0,"y":475.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"94dad7c3-e052-4579-8d88-6710a3b6623a","name":"Informar Compra Finalizada","elementImage":"files\\bpmnElements\\MessageIntermediate_Throw.png","imageBounds":{"points":[{"x":2086.0,"y":558.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"MessageIntermediate"},{"id":"861e4f66-9f16-4b9b-bac0-11f485ab45ef","name":"Compra Finalizada","elementImage":"files\\bpmnElements\\MessageIntermediate_Catch.png","imageBounds":{"points":[{"x":2086.0,"y":819.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"MessageIntermediate"},{"id":"4a269214-43d4-47c0-9d87-78add3b9edc9","name":"Emitir Nota Fiscal","elementImage":"files\\bpmnElements\\ScriptTask.png","imageBounds":{"points":[{"x":2079.0,"y":407.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ScriptTask","properties":[]},{"id":"64d31a70-9283-4c17-b747-ea155b7c8ff1","name":"Enviar Nota Fiscal Eletrônica","elementImage":"files\\bpmnElements\\MessageEnd.png","imageBounds":{"points":[{"x":2220.0,"y":422.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"MessageEnd"},{"id":"6ddf10b2-6e52-4677-a426-2ada4e6ef808","name":"Separar Produtos Selecionados","elementImage":"files\\bpmnElements\\ManualTask.png","imageBounds":{"points":[{"x":2233.0,"y":728.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ManualTask","properties":[]},{"id":"598ee9fa-20c4-4181-bf64-e1081363b1c2","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":2185.0,"y":814.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"8361b59e-6e93-4ae0-8d26-06c1511be472","name":"Solicitar Transportadora Selecionada","elementImage":"files\\bpmnElements\\SendTask.png","imageBounds":{"points":[{"x":2323.0,"y":877.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"SendTask","properties":[{"id":"SendTaskImplementation","name":"Implementação","value":"Serviço Web","type":"text"}]},{"id":"aa8a0d3d-5cc0-41a2-b2c4-4b0e17234b02","name":"Atualização de Status","elementImage":"files\\bpmnElements\\MessageIntermediate_Throw.png","imageBounds":{"points":[{"x":2359.0,"y":743.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"MessageIntermediate"},{"id":"3731ec49-e5e7-4a91-8846-df462a1044b5","name":"Embalar Produtos","elementImage":"files\\bpmnElements\\ManualTask.png","imageBounds":{"points":[{"x":2429.0,"y":728.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ManualTask","properties":[]},{"id":"47c6cdd8-cdbe-4607-94d1-190d0057d527","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":2521.0,"y":818.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"3a53fbb3-88f0-4256-9d03-4dc73e4cbbb4","name":"Despachar para a Transportadora","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2600.0,"y":808.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"00554431-e295-4ccf-9941-626e27acffa1","name":"Atualização de Status","elementImage":"files\\bpmnElements\\MessageEnd.png","imageBounds":{"points":[{"x":2762.0,"y":823.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"MessageEnd"},{"id":"829c5a4f-249f-4425-92ec-d2853e2dff4f","name":"Evento de temporizador","elementImage":"files\\bpmnElements\\TimerIntermediate.png","imageBounds":{"points":[{"x":1791.0,"y":389.0}],"radius":11.0,"height":22.0,"width":22.0,"shape":"circle"},"elementType":"TimerIntermediate"},{"id":"9567d333-7e95-4833-bcd2-47a137dbb69a","name":"Compra Cancelada","elementImage":"files\\bpmnElements\\TerminateEnd.png","imageBounds":{"points":[{"x":1900.0,"y":331.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"TerminateEnd"},{"id":"c09a0313-c15d-490c-9f1e-ca422c3a3fa5","name":"Evento de Erro","elementImage":"files\\bpmnElements\\ErrorIntermediate.png","imageBounds":{"points":[{"x":960.0,"y":228.0}],"radius":11.0,"height":22.0,"width":22.0,"shape":"circle"},"elementType":"ErrorIntermediate","properties":[{"id":"ErrorCode","name":"Código de erro","type":"text"}]},{"id":"b3efb126-5742-4293-ba9a-2dedef2bf3fd","name":"Compra Cancelada","elementImage":"files\\bpmnElements\\TerminateEnd.png","imageBounds":{"points":[{"x":1032.0,"y":224.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"TerminateEnd"},{"id":"40f11731-d7a7-43ec-a73e-a64265337646","name":"Lista de Produtos Selecionados","elementImage":"files\\bpmnElements\\DataObject_IsCollection.png","imageBounds":{"points":[{"x":134.0,"y":41.0}],"radius":0.0,"height":50.0,"width":40.0,"shape":"rect"},"elementType":"DataObject","properties":[{"id":"DataObjectState","name":"Estado","value":"","type":"text"}]},{"id":"3ffcaef0-5aee-4787-9cb0-3e6db6ee29b2","name":"Lista de Produtos Selecionados","elementImage":"files\\bpmnElements\\DataObject_IsCollection.png","imageBounds":{"points":[{"x":2179.0,"y":686.0}],"radius":0.0,"height":50.0,"width":40.0,"shape":"rect"},"elementType":"DataObject","properties":[{"id":"DataObjectState","name":"Estado","value":"","type":"text"}]},{"id":"4209aafb-9d1d-47e8-8af5-a094910af2e6","name":"Nota Fiscal Física","elementImage":"files\\bpmnElements\\DataObject.png","imageBounds":{"points":[{"x":2364.0,"y":489.0}],"radius":0.0,"height":50.0,"width":40.0,"shape":"rect"},"elementType":"DataObject","properties":[{"id":"DataObjectState","name":"Estado","value":"","type":"text"}]},{"id":"4b6d1471-0853-49b5-8281-223c1a4cb671","name":"Site","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":283.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"803f308a-abcb-4f78-9a18-cb5b5da8762c","name":"Financeiro","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":303.0}],"radius":0.0,"height":377.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"f4fbec9f-5400-493a-9f43-bff4d1d510a4","name":"Logística","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":680.0}],"radius":0.0,"height":309.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]},{"id":"e92100a2-bf67-4bde-a246-a0ef743d7b62","name":"Operadora de Crédito","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":1492.0,"y":1040.0}],"radius":0.0,"height":88.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[]},{"id":"e4336114-1db2-4183-b118-f5f0f5f279e9","name":"Transportadora","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":2027.0,"y":1041.0}],"radius":0.0,"height":88.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[]}],"subPages":[{"id":"6e90cc2e-b4d7-4fe7-8b7e-437aca48ec71","name":"Realizar cadastro","image":"files\\diagrams\\Realizar_cadastro.png","isSubprocessPage":true,"elements":[{"id":"b26794f6-c6c8-48ec-ab4f-f6b704d3edbc","name":"Início do Cadastro","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":35.0,"y":158.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"fcf8f4af-b7d2-4cc9-9836-bf6644ee729a","name":"Criar Login no Site","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":116.903854,"y":143.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","properties":[]},{"id":"0b17762b-d43b-4de6-8a35-43cb761de7cc","name":"Preencher Dados Pessoais","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":258.8077,"y":143.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","properties":[]},{"id":"f415032e-8ac3-481f-9861-6deb6b482881","name":"Confirmar Termos","elementImage":"files\\bpmnElements\\SubProcess.png","imageBounds":{"points":[{"x":410.5,"y":143.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"isPublished":true,"elementType":"SubProcess","properties":[]},{"id":"97345fdc-a80a-4e57-ae74-10ce1eb7c7f1","name":"E-mail de Confirmação","elementImage":"files\\bpmnElements\\MessageIntermediate_Throw.png","imageBounds":{"points":[{"x":570.711548,"y":158.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"MessageIntermediate"},{"id":"17b40698-fecf-4e7e-b87e-a983dc233b6e","name":"Gateway baseado em evento","elementImage":"files\\bpmnElements\\EventBasedGateway.png","imageBounds":{"points":[{"x":686.0,"y":153.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"EventBasedGateway","properties":[{"id":"Instantiate","name":"Instanciar","value":"False","type":"text"}],"pageElements":[]},{"id":"e6f18250-ed49-4ea0-b560-d1c12afaf551","name":"Confirmação do E-mail","elementImage":"files\\bpmnElements\\MessageIntermediate_Catch.png","imageBounds":{"points":[{"x":761.8462,"y":81.2307739}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"MessageIntermediate"},{"id":"bb8d4122-d2d5-4a36-be41-78b4eac986c8","name":"Registrar Lead","elementImage":"files\\bpmnElements\\BusinessRuleTask.png","imageBounds":{"points":[{"x":830.0,"y":66.2307739}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"BusinessRuleTask","properties":[]},{"id":"c7037fed-1901-488f-bfca-86bff56f0d6e","name":"Cadastro Finalizado","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":971.8462,"y":81.2307739}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"73a3a324-43c5-478e-8ec0-d80bca1e9a3a","name":"Prazo de Confirmação","elementImage":"files\\bpmnElements\\TimerIntermediate.png","imageBounds":{"points":[{"x":761.8462,"y":242.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"TimerIntermediate"},{"id":"d7d2e666-925e-46cc-955a-b6465d1f7aad","name":"Cancelar Cadastro","elementImage":"files\\bpmnElements\\ScriptTask.png","imageBounds":{"points":[{"x":826.0,"y":227.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ScriptTask","properties":[]},{"id":"4ac9d19e-ea9d-4ab2-9777-ef6b4065ddc2","name":"Processo Cancelado","elementImage":"files\\bpmnElements\\ErrorEnd.png","imageBounds":{"points":[{"x":974.1538,"y":242.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"ErrorEnd"},{"id":"ec6bfa8f-e977-46b0-864b-06e0f2296502","name":"Evento de Erro","elementImage":"files\\bpmnElements\\ErrorIntermediate.png","imageBounds":{"points":[{"x":479.0,"y":132.0}],"radius":11.0,"height":22.0,"width":22.0,"shape":"circle"},"elementType":"ErrorIntermediate"},{"id":"faec5a25-ed15-403e-bfa8-80a9f7dbf54d","name":"Processo Cancelado","elementImage":"files\\bpmnElements\\ErrorEnd.png","imageBounds":{"points":[{"x":539.0,"y":62.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"ErrorEnd"},{"id":"8db17c25-a9db-4ecf-8d2e-6e872f021a39","name":"CRM KaBuM!","elementImage":"files\\bpmnElements\\DataStoreReference.png","imageBounds":{"points":[{"x":1220.0,"y":58.0}],"radius":0.0,"height":50.0,"width":50.0,"shape":"rect"},"elementType":"DataStoreReference","properties":[{"id":"DataStoreState","name":"Estado","value":"","type":"text"}]}],"parentRef":"0b12f706-fab3-433c-815e-7d4a4bb0d289"},{"id":"f415032e-8ac3-481f-9861-6deb6b482881","name":"Confirmar Termos","image":"files\\diagrams\\Confirmar_Termos.png","isSubprocessPage":true,"elements":[{"id":"359c3274-591f-417e-82be-91d233c1c4a1","name":"Aceitar  Termos de Uso","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":259.0,"y":20.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","properties":[]},{"id":"1466b4c8-08d1-4ae3-a889-e31c7e29616d","name":"Aceitar Termos de e-mail Marketing","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":259.142883,"y":129.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","properties":[]},{"id":"38dce78e-632e-47b5-b046-be4ab53f8076","name":"Registrar  Opções do Usuário","elementImage":"files\\bpmnElements\\ScriptTask.png","imageBounds":{"points":[{"x":454.142883,"y":74.5}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ScriptTask","properties":[]},{"id":"f01ccf5a-e13e-4af1-8bbb-676efabbf493","name":"Recusar todos os Termos","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":257.7143,"y":238.285736}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","properties":[]},{"id":"f98274d9-85a7-4b3d-98db-de9b8522b1c0","name":"Confirmação de Termos","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":45.0,"y":169.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"87d09c78-bed1-4771-91d6-fbfa2ffdec7e","name":"Aceitar Termos?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":118.428574,"y":164.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Opções de Termos","elementType":"SequenceFlow","properties":[]},{"name":"Recusar todos os Termos","elementType":"SequenceFlow","properties":[]}]},{"id":"38f05aa9-e038-4d06-8b0d-3940fc3c7b96","name":"Opções de Termos","elementImage":"files\\bpmnElements\\InclusiveGateway.png","imageBounds":{"points":[{"x":188.0,"y":84.5}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"InclusiveGateway","properties":[],"pageElements":[{"name":"Aceitar Termos de e-mail Marketing","elementType":"SequenceFlow","properties":[]},{"name":"Aceitar  Termos de Uso","elementType":"SequenceFlow","properties":[]}]},{"id":"5133a26c-8bfa-431e-bcd3-1bdbd13c8245","name":"Gateway inclusivo","elementImage":"files\\bpmnElements\\InclusiveGateway.png","imageBounds":{"points":[{"x":374.142883,"y":84.5}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"InclusiveGateway","properties":[],"pageElements":[{"name":"Registrar  Opções do Usuário","elementType":"SequenceFlow","properties":[]}]},{"id":"4c90f3a3-0f61-4b7e-84b7-7f71241750f7","name":"Termos Confirmados","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":590.5715,"y":89.5}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"c2d5c8e4-526f-417d-9c63-2e9d6bf77c21","name":"Processo Cancelado","elementImage":"files\\bpmnElements\\ErrorEnd.png","imageBounds":{"points":[{"x":412.0,"y":253.285736}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"ErrorEnd"}],"parentRef":"6e90cc2e-b4d7-4fe7-8b7e-437aca48ec71"}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"0b12f706-fab3-433c-815e-7d4a4bb0d289","containerName":"BPMN - KaBuM!","isSubprocess":false,"elements":[{"id":"c8da02e6-6d9b-4278-8d47-ece09034ea25","value":"KaBuM!"},{"id":"4b6d1471-0853-49b5-8281-223c1a4cb671","value":"Site"},{"id":"803f308a-abcb-4f78-9a18-cb5b5da8762c","value":"Financeiro"},{"id":"f4fbec9f-5400-493a-9f43-bff4d1d510a4","value":"Logística"},{"id":"40f11731-d7a7-43ec-a73e-a64265337646","value":"Lista de Produtos Selecionados"},{"id":"3ffcaef0-5aee-4787-9cb0-3e6db6ee29b2","value":"Lista de Produtos Selecionados"},{"id":"4209aafb-9d1d-47e8-8af5-a094910af2e6","value":"Nota Fiscal Física"},{"id":"54fc4205-7df4-4567-9804-02e2779c615a","value":"Acessar Carrinho do Site"},{"id":"3b8ed001-9e07-49a6-97ca-45f9540a85a6","value":"Escolher Frete"},{"id":"a8528c4d-8bae-4368-a279-d37643233f11","value":"Preencher CEP"},{"id":"7334ee47-f00d-4de5-a623-5bb6eaf56956","value":"Identificação"},{"id":"2eeb09ce-5a81-4d89-9059-fd7e9b25b25e","value":"Realizar login"},{"id":"4b117b80-f135-4852-9dc6-4309fba9f147","value":"Escolher Forma de Pagamento"},{"id":"89cc519b-9f90-44cf-bb2e-d2193fbe2bda","value":""},{"id":"b39f49e9-aad9-4433-b5a2-485d1068f4c9","value":"Fechar pedido"},{"id":"1539f932-ec68-4324-b143-ec990e84e187","value":"Pagamento Selecionado"},{"id":"69b87a4a-994e-46e7-ba22-6a41b3361482","value":"Forma de Pagamento?"},{"id":"1dc722e6-ad3c-4bfe-98bc-cce0e331486f","value":"Fim da seleção dos Produtos"},{"id":"97d5ac86-cc3f-473b-82b9-e3654738d97a","value":""},{"id":"755da18a-c76b-42f5-b893-9a7435f4455a","value":"Informar Dados do Cartão"},{"id":"05064ff4-f71f-41c6-a87e-03d16d866bc0","value":"Processar Pagamento"},{"id":"bac2d1de-6b7e-4616-95da-19f62474a384","value":"Enviar Boleto"},{"id":"829c5a4f-249f-4425-92ec-d2853e2dff4f","value":""},{"id":"045a57fe-1c94-4c1b-8537-f5526f777eb6","value":"Gerar Boleto"},{"id":"3915a771-c9b1-4127-8147-3cf47e0d1bd1","value":""},{"id":"94dad7c3-e052-4579-8d88-6710a3b6623a","value":"Informar Compra Finalizada"},{"id":"f2394003-6863-4168-a0b5-aae244cfcf38","value":"Aguardar pagamento do Boleto"},{"id":"861e4f66-9f16-4b9b-bac0-11f485ab45ef","value":"Compra Finalizada"},{"id":"598ee9fa-20c4-4181-bf64-e1081363b1c2","value":""},{"id":"6ddf10b2-6e52-4677-a426-2ada4e6ef808","value":"Separar Produtos Selecionados"},{"id":"4a269214-43d4-47c0-9d87-78add3b9edc9","value":"Emitir Nota Fiscal"},{"id":"64d31a70-9283-4c17-b747-ea155b7c8ff1","value":"Enviar Nota Fiscal Eletrônica"},{"id":"ed034549-d90e-47c5-8c56-c142631f4511","value":""},{"id":"9567d333-7e95-4833-bcd2-47a137dbb69a","value":"Compra Cancelada"},{"id":"3731ec49-e5e7-4a91-8846-df462a1044b5","value":"Embalar Produtos"},{"id":"47c6cdd8-cdbe-4607-94d1-190d0057d527","value":""},{"id":"3a53fbb3-88f0-4256-9d03-4dc73e4cbbb4","value":"Despachar para a Transportadora"},{"id":"00554431-e295-4ccf-9941-626e27acffa1","value":"Atualização de Status"},{"id":"aa8a0d3d-5cc0-41a2-b2c4-4b0e17234b02","value":"Atualização de Status"},{"id":"8361b59e-6e93-4ae0-8d26-06c1511be472","value":"Solicitar Transportadora Selecionada"},{"id":"c09a0313-c15d-490c-9f1e-ca422c3a3fa5","value":""},{"id":"b3efb126-5742-4293-ba9a-2dedef2bf3fd","value":"Compra Cancelada"},{"id":"ed76063f-25c9-4fb8-8d7d-5fdb5e8f944d","value":"Aceitar Termos  e Condições"},{"id":"6e90cc2e-b4d7-4fe7-8b7e-437aca48ec71","value":"Realizar cadastro"},{"id":"b14970d4-0162-43d8-9633-59e547d83269"},{"id":"dd60a91c-83e6-4577-b3ee-a18b002978ae"},{"id":"5b550de6-fa16-4cfc-9cca-f48fc0a3fb39"},{"id":"489712d3-a8e7-445c-9a97-6dc0af63b4e5"},{"id":"de1ecaa6-6c32-4ed6-b592-40d815693a00"},{"id":"3e31e376-cb1c-4e9a-bcc3-ab13c9df0609"},{"id":"7de9053a-976d-4264-94de-060cf61e2687"},{"id":"5b80202d-e989-4bf7-9d33-e7a3a8d69688"},{"id":"29f730c8-464d-44ae-ab1e-184997da01ea","value":"Anexa na embalagem do Produto uma Cópia da nota fiscal"},{"id":"24624479-7d45-4c54-8d54-8e654813607a"},{"id":"811e1840-e047-4318-a1db-032326ea320f"},{"id":"361fcebf-f905-4a2d-80cd-07a2d5b2c282"},{"id":"ade1e8bd-f063-4fbd-8db4-02130f9ed137"},{"id":"e92100a2-bf67-4bde-a246-a0ef743d7b62","value":"Operadora de Crédito"},{"id":"e4336114-1db2-4183-b118-f5f0f5f279e9","value":"Transportadora"}]}]}