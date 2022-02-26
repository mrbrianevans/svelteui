import type { SvelteuiColor, SvelteuiThemeBase } from '$lib/_styles';

export interface GetVariantStyles {
	theme: SvelteuiThemeBase;
	color: SvelteuiColor;
	variant: 'filled' | 'light' | 'outline' | 'default' | 'white' | 'gradient' | 'subtle';
	gradient?: { from: SvelteuiColor; to: SvelteuiColor; deg: number };
}
