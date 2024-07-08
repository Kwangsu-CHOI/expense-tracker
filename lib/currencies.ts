export const Currencies = [
	{ value: "AUD", label: "$ Dollar", locale: "en-US" },
	{ value: "EUR", label: "€ Euro", locale: "de-DE" },
	{ value: "JPY", label: "¥ Yen", locale: "ja-JP" },
	{ value: "KRW", label: "₩ Won", locale: "ko-KR" },
];

export type Currency = (typeof Currencies)[0];
