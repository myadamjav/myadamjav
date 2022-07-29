$(document).ready(function(){
    $('[required="required"]').prev('label').append('<span>*</span>').children('span').addClass('required');
    $('tbody tr:even').addClass('even');
    $('#btnAddTask').click(function(evt) {
        evt.preventDefault();
        $('#taskCreation').removeClass('not');
    });

    $('#tblTasks tbody tr:first' ).clone().insertAfter('#tblTasks tbody tr:last')

    $('tbody tr').click(function(evt) { 
        $(evt.target).toggleClass('rowHighlight');
        $(evt.target).closest('td').siblings().toggleClass('rowHighlight');
    });    

    $('#tblTasks tbody').on('click', '.deleteRow', function(evt) { 
        evt.preventDefault(); 
        $(evt.target).parents('tr').remove();
    });

    $("#btnPrintObject").click(function() {
        console.log(JSON.stringify($('form').toObject()));
    });
    
    $("#btnLoadObject").click(function() {
        o = {task: 'Task 1', requiredBy: '2022-08-08', category: 'Work'};
        $('form').fromObject(o);
    });
});

(function($) { 
    $.fn.extend({ 
        action: function() {} 
    });
})(jQuery);

(function($) { 
    $.fn.extend({ 
        toObject: function() { 
            var result = {}; 
            $.each(this.serializeArray(), function(i, v) { 
                result[v.name] = v.value; 
            }); 
            return result 
        },
        fromObject: function(obj) { 
            this.find(':input').filter((i, v) => $(v).attr('name') in obj)
                .map((i, v)=> $(v).val(obj[$(v).attr('name')]));
            
            // $.each(this.find(':input'), function(i,v) { 
            //     var name = $(v).attr('name'); 
            //     if (obj[name]) { 
            //         $(v).val(obj[name]); 
            //     } 
            //     else { 
            //         $(v).val(''); 
            //     } 
            // });
        }     
    });
})(jQuery)