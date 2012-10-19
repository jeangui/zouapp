Template.transaction_tpl.formatDate = function ( date ) {
      console.log("-- Template.transaction_tpl.formatDate --");

      return moment( date ).format('LLLL');
    };