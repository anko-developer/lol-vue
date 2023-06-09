import SvgImage from '@/components/common/SvgImage.vue';
import LolLayout from '@/layouts/LolLayout.vue';

export default {
	install(app) {
		app.component('SvgImage', SvgImage);
		app.component('LolLayout', LolLayout);
	},
};
