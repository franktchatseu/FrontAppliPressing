
		var menuLeft = document.getElementById( 'cbp-spmenu-s1' ),
		showLeftPush = document.getElementById( 'showLeftPush' ),
		
		body = document.body;
		showLeftPush.onclick = function () {
            
			body = document.body;
			classie.toggle(this, 'active');
            classie.toggle(body, 'cbp-spmenu-push-toright');
            alert
			classie.toggle(menuLeft, 'cbp-spmenu-open');
			disableOther('showLeftPush');
		};

		function disableOther(button) {
			if (button !== 'showLeftPush') {
				classie.toggle(showLeftPush, 'disabled');
			}
		}