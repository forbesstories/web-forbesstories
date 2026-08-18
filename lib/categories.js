export const CATEGORIES = {
	"ai-tools": {
		name: "AI Tools",
		description:
			"Informasi tentang AI Tools, kecerdasan buatan, aplikasi AI, dan berbagai alat digital untuk membantu produktivitas dan kebutuhan online."
	},

	"aplikasi-penghasil-cuan": {
		name: "Aplikasi Penghasil Cuan",
		description:
			"Informasi tentang aplikasi penghasil cuan, peluang penghasilan online, dan berbagai platform digital untuk mendapatkan penghasilan."
	},

	"teknologi": {
		name: "Teknologi",
		description:
			"Informasi teknologi digital, aplikasi, perangkat, inovasi, dan perkembangan teknologi terbaru."
	},

	"internet": {
		name: "Internet",
		description:
			"Tips dan informasi internet, layanan online, keamanan digital, serta berbagai cara memanfaatkan internet."
	},

	"tren-online": {
		name: "Tren Online",
		description:
			"Informasi tentang tren online, aplikasi populer, media sosial, dan perkembangan terbaru di dunia digital."
	}
};

export function getCategory(kategori=""){
	const slug = String(kategori).toLowerCase().trim();

	return CATEGORIES[slug] || {
		name: kategori,
		description:
			"Informasi terbaru tentang teknologi digital, AI, internet, aplikasi, dan perkembangan online."
	};
}
