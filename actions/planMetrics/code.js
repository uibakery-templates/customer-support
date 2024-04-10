return {{data}}.reduce((acc, i) => {
  const plan = i['Pricing Plan'];
  if (!acc[plan]) {
  	acc[plan] = 0;
  }
  acc[plan]++;
	return acc;
}, {});