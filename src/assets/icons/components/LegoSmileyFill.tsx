import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgLegoSmileyFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#lego-smiley-fill_svg__a)"><path fill="#000" d="M11.5 3h-1V2a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v1h-1a2 2 0 0 0-2 2v6A2.004 2.004 0 0 0 4 12.938V14a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-1.062A2.004 2.004 0 0 0 13.5 11V5a2 2 0 0 0-2-2M9.75 6.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m.267 3.673a3.81 3.81 0 0 1-4.034 0 .5.5 0 0 1 .534-.846 2.81 2.81 0 0 0 2.966 0 .5.5 0 0 1 .534.846M6.5 2h3v1h-3zm-.25 4.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5M11 14H5v-1h6z" /></g><defs><clipPath id="lego-smiley-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgLegoSmileyFill);
const Memo = memo(ForwardRef);
export default Memo;