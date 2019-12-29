<template>
  <div class="contract-container">
    <div class="contract-header">
      <div>
        <h1>4615037811</h1>
        <p class="supplier">
          Supplied by
          <span class="supplier-name">Informatica Corporation</span>
        </p>
      </div>
      <div>
        <h2 class="price">10000.00</h2>
        <h3 class="currency">EUR</h3>
      </div>
    </div>
    <hr />
    <div class="contract-details">
      <div class="contract-origin-info">
        <h1 class="contract-type">MK Agreement</h1>
        <h2 class="contract-company">Service Organization, GBP</h2>
        <p class="purchase-org">
          <span>Purchase Org:</span> Europe
        </p>
        <p class="incoterm">
          <span>Incoterm:</span> CFR
        </p>
      </div>
      <div class="contract-desc">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident laboriosam, dolores delectus, consequuntur totam voluptas, ipsum modi consectetur soluta numquam debitis. Neque excepturi assumenda aspernatur a dignissimos debitis doloribus libero repellat? Obcaecati aut quos quibusdam.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde facere adipisci molestiae illum voluptatibus nesciunt.</p>
      </div>
    </div>
    <hr />
    <div class="contract-edit">
      <h1 class="validity-title">Edit validity range</h1>
      <div class="price-validity">
        <input type="text" />
        <p>-</p>
        <input type="text" />
        <div class="button-wrapper">
          <input type="submit" value="Send" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.contract-container {
  background: white;
  border-radius: 12px;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(209, 209, 209, 1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(209, 209, 209, 1);
  box-shadow: 0px 0px 5px 0px rgba(209, 209, 209, 1);
  overflow: hidden;
}

hr {
  border: none;
  height: 1px;
  background: #dcdcdc;
  margin: 2rem;
}

.contract-header {
  display: flex;
  justify-content: space-between;
  padding: 2rem 2rem 0 2rem;
}

.supplier {
  color: var(--primary-color);
  font-size: 0.8em;
}

.supplier-name {
  font-weight: 700;
}

.price {
  font-size: 1.9em;
  font-weight: 400;
  color: var(--gray);
  margin-top: 0.7rem;
}

.currency {
  float: right;
  font-weight: 400;
  color: var(--gray);
}

.contract-details {
  display: flex;
  padding: 0 2rem;
}

.contract-origin-info {
  min-width: 35%;
}

.contract-type,
.validity-title {
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--gray);
}

.contract-company {
  font-size: 1rem;
  font-weight: 400;
  color: var(--gray);
}

.purchase-org {
  margin-top: 2rem;
}

.purchase-org,
.incoterm {
  color: var(--gray);
}

.purchase-org span,
.incoterm span {
  font-weight: 800;
}

.contract-desc {
  color: var(--gray);
  font-size: 0.8rem;
}

.contract-desc p:last-child {
  padding-top: 1.4rem;
}

.price-validity {
  display: flex;
  justify-content: space-between;
  margin-top: 0.7rem;
}

.price-validity p {
  color: var(--gray);
  margin-top: 1rem;
}

.contract-edit {
  background: var(--lightest-gray);
  padding: 2rem;
  margin-top: -2rem;
}

.button-wrapper {
  margin-top: -1rem;
}

input[type="text"] {
  border-style: solid;
  border-width: 0 0 1px 0;
  border-color: var(--lighter-gray);
  background: transparent;
  color: var(--primary-color);
  font-weight: 700;
  padding: 1rem 0.5rem;
}

input[type="submit"] {
  border: none;
  display: block;
  background: var(--primary-color);
  color: white;
  font-size: 1.1rem;
  text-transform: uppercase;
  padding: 0.75rem 3.5rem;
  border-radius: 36px;
  cursor: pointer;
}

input:focus {
  outline: 0;
}
</style>