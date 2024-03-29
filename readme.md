# Coffee App
This is a Coffee App build over react native runs over android &amp; ios.


<b>PLEASE HELP ME TO CONTRIBUTE MORE PROJECT LIKE THIS!</b>
<br/>
<table>
  <tr>
    <td>
      <img src="https://i.imgur.com/YqZoCrv.png" width=800>
    </td>
    <td>
      <img src="https://i.imgur.com/s9Q2qDB.png" width=800>
    </td>
    <td>
      <img src="https://i.imgur.com/Pm0bcLw.png" width=800>
    </td>
    <td>
      <img src="https://i.imgur.com/sCqv8Bz.png" width=800>
    </td>
    <td>
      <img src="https://i.imgur.com/56CcThF.png" width=800>
    </td>
  </tr>
</table>

<style> .btcpay-form { display: inline-flex; align-items: center; justify-content: center; } .btcpay-form--inline { flex-direction: row; } .btcpay-form--block { flex-direction: column; } .btcpay-form--inline .submit { margin-left: 15px; } .btcpay-form--block select { margin-bottom: 10px; } .btcpay-form .btcpay-custom-container{ text-align: center; }.btcpay-custom { display: flex; align-items: center; justify-content: center; } .btcpay-form .plus-minus { cursor:pointer; font-size:25px; line-height: 25px; background: #DFE0E1; height: 30px; width: 45px; border:none; border-radius: 60px; margin: auto 5px; display: inline-flex; justify-content: center; } .btcpay-form select { -moz-appearance: none; -webkit-appearance: none; appearance: none; color: currentColor; background: transparent; border:1px solid transparent; display: block; padding: 1px; margin-left: auto; margin-right: auto; font-size: 11px; cursor: pointer; } .btcpay-form select:hover { border-color: #ccc; } .btcpay-form option { color: #000; background: rgba(0,0,0,.1); } .btcpay-input-price { -moz-appearance: textfield; border: none; box-shadow: none; text-align: center; font-size: 25px; margin: auto; border-radius: 5px; line-height: 35px; background: #fff; }.btcpay-input-price::-webkit-outer-spin-button, .btcpay-input-price::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; } </style>
<form method="POST" action="https://anarpay.us/api/v1/invoices" class="btcpay-form btcpay-form--block">
  <input type="hidden" name="storeId" value="6eMJkstqy7qkNiGR7c6ofMXc3D6X7RJABsiKH4pvUGMC" />
  <div class="btcpay-custom-container">
    <div class="btcpay-custom">
      <button class="plus-minus" type="button" data-type="-" data-step="0.1" data-min="1" data-max="20000000">-</button>
      <input class="btcpay-input-price" type="number" name="price" min="1" max="20000000" step="0.1" value="2" data-price="2" style="width:2em;" />
      <button class="plus-minus" type="button" data-type="+" data-step="0.1" data-min="1" data-max="20000000">+</button>
    </div>
    <select name="currency">
      <option value="USD" selected>USD</option>
      <option value="GBP">GBP</option>
      <option value="EUR">EUR</option>
      <option value="BTC">BTC</option>
    </select>
  </div>
<button type="submit" class="submit" name="submit" style="min-width:146px;min-height:40px;border-radius:4px;border-style:none;background-color:#0f3b21;cursor:pointer;" title="Pay with BTCPay Server, a Self-Hosted Bitcoin Payment Processor"><span style="color:#fff">Buy Coffee</span>
<img src="https://bitcoin.org/img/icons/logotop.svg?1706112497" style="height:40px;display:inline-block;padding:5% 0 5% 5px;vertical-align:middle;">
</button></form>
<script>
    function handlePlusMinus(event) {
        event.preventDefault();
        const root = event.target.closest('.btcpay-form');
        const el = root.querySelector('.btcpay-input-price');
        const step = parseInt(event.target.dataset.step) || 1;
        const min = parseInt(event.target.dataset.min) || 1;
        const max = parseInt(event.target.dataset.max);
        const type = event.target.dataset.type;
        const price = parseInt(el.value) || min;
        if (type === '-') {
            el.value = price - step < min ? min : price - step;
        } else if (type === '+') {
            el.value = price + step > max ? max : price + step;
        }
    }
    document.querySelectorAll(".btcpay-form .plus-minus").forEach(function(el) {
        if (!el.dataset.initialized) {
            el.addEventListener('click', handlePlusMinus);
            el.dataset.initialized = true;
        }
    });
    
    function handlePriceInput(event) {
        event.preventDefault();
        const root = event.target.closest('.btcpay-form');
        const price = parseInt(event.target.dataset.price);
        if (isNaN(event.target.value)) root.querySelector('.btcpay-input-price').value = price;
        const min = parseInt(event.target.getAttribute('min')) || 1;
        const max = parseInt(event.target.getAttribute('max'));
        if (event.target.value < min) {
            event.target.value = min;
        } else if (event.target.value > max) { 
            event.target.value = max;
        }
    }
    document.querySelectorAll(".btcpay-form .btcpay-input-price").forEach(function(el) {
        if (!el.dataset.initialized) {
            el.addEventListener('input', handlePriceInput);
            el.dataset.initialized = true;
        }
    });
</script>

