function showDataElementsList(element){
        var textBoxID = element.id.split('-')[0];
        textBox = document.getElementById(textBoxID+'-DataElement-Value');
        window.extensionBridge.openDataElementSelector(function(data) {
            textBox.value = data;
        })
    }
    
    function addCustomVariable(element){
        var textBoxIDNumber = getCustomVariableCount();
        if(textBoxIDNumber < 255){
            textBoxIDNumber++;
            var nextTextBoxID = "variable"+(textBoxIDNumber);
            $('#customVariables').append('<label id="custom'+textBoxIDNumber+'"><br><span class="label">Variable '+textBoxIDNumber+'</span> <input is="coral-textfield" id="'+nextTextBoxID+'-DataElement-Value" class="coral-Form-field"/> <button id="'+nextTextBoxID+'-Get-DataElement" class="coral-Button coral-Button--minimal coral-Button--medium" onclick="showDataElementsList(this)"> <span class="coral-Icon coral-Icon--sizeS coral-Icon--data" role="img"></span> <span class="coral-Button-label"></span></button><button id="'+nextTextBoxID+'-Add" class="coral-Button coral-Button--minimal coral-Button--medium" onclick="addCustomVariable(this)"> <span class="coral-Icon coral-Icon--sizeS coral-Icon--add" role="img"></span> <span class="coral-Button-label"></span> </button> <button id="'+nextTextBoxID+'-Remove" class="coral-Button coral-Button--minimal coral-Button--medium" onclick="removeCustomVariable(this)"> <span class="coral-Icon coral-Icon--sizeS coral-Icon--minus" role="img"></span> <span class="coral-Button-label"></span> </button></label>')
        }else{
            
        }
    }
    
    function removeCustomVariable(element){
        var textBoxID = element.id.split('-')[0];
        var textBoxIDNumber = Number(textBoxID.substr(textBoxID.length-1));
        var labelID = 'custom'+textBoxIDNumber;
        console.log(labelID);
        $('#'+labelID).remove();
    }
    
    function getVariablesArray(){
        console.log("getVariablesArray");
        var jsonData = {};
        $('#customVariables').children('label').each(function () {
            var key = this.id;            
            var count = Number(key.substr(key.length-1));
            var textBoxID = 'variable'+count+'-DataElement-Value';
            jsonData[key] = $('#'+textBoxID).val();            
        });
        return jsonData;
    }
    
    function getCustomVariableCount(){
        return $('#customVariables > label').length;
    }