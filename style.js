const people = document.querySelector('#people')
const amount = document.querySelector('#amount')
const sumBtn = document.querySelector('.sum')
const error = document.querySelector('.error')
const costInfo = document.querySelector('.cost-info')
const totalAmount = document.querySelector('.total-amount')

const verifyEmpty = () => {
	if (amount.value == '' || people.value == '') {
		error.textContent = 'Complete empty fields'
	} else {
		error.textContent = ''
		totalAmountFunction()
	}
}
const totalAmountFunction = () => {
	const newAmount = parseInt(amount.value)
	const newPeople = parseInt(people.value)
	const totalSum = newAmount / newPeople
	costInfo.style.display = 'block'
	totalAmount.textContent = totalSum.toFixed(2)
}
sumBtn.addEventListener('click', verifyEmpty)
