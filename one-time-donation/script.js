// Radio button nominal donasi
		let btnsRadioDonasi = document.querySelectorAll('.radio-style');
		let btnSubmitDonasi = document.getElementById('submitDonasi');
		let selectedRadioValue;

			// Value nominal donasi
		let donationRadioValue = document.getElementsByName('nominal_donasi');
		let donationCustomValue = document.getElementById('donasiCustom');
		let donationValueFix;

		let outputPaymentMethod = document.getElementById('outputPaymentMethod');

			// value data diri
		let donationNama = document.getElementById('formDonasiNama');
		let donationEmail = document.getElementById('formDonasiEmail');
		let donationNoHp = document.getElementById('formDonasiNoHp');

			// metode donasi
		let donationMetode = document.getElementsByClassName('selected-method');
		let fixedMethodPayment;

		btnsRadioDonasi.forEach(btnElement => {
			btnElement.addEventListener('click', () => {
				document.querySelector('.radio-style-active')?.classList.remove('radio-style-active');
				btnElement.classList.add('radio-style-active');
			});
		});

		radioValue = () => {
			for(i = 0; i < donationRadioValue.length; i++){
				if (donationRadioValue[i].checked) {
					selectedRadioValue = donationRadioValue[i].value;
					return selectedRadioValue;
				}
			}
		}


		chosenValue = () => {
			if (donationCustomValue.value === "") {
				donationValueFix = radioValue();
			} else {
				donationValueFix = donationCustomValue.value;
			}

			return donationValueFix;
		}

		selectedPaymentMethod = (e) => {
			fixedMethodPayment = e;
			outputPaymentMethod.value = e.toUpperCase();
		}

		$(document).ready(function(){
			$("form").submit(function(e){
				e.preventDefault();

				const data = {
					name: donationNama.val(),
					email: donationEmail.val(),
					phoneNumber: donationNoHp.val(),
					donationValue: chosenValue(),
					paymentMethod: fixedMethodPayment
				};

				$.ajax({
					type: 'POST',
					url: '',
					data: JSON.stringify(data),
					contentType: 'application/json'
				}).done((data) => {
					console.log({data});
				}).fail((err) => {
					console.log({err});
				});
			});
		});