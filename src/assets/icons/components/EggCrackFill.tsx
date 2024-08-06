import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgEggCrackFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#egg-crack-fill_svg__a)"><path fill="#000" d="M13.5 9.5A5.507 5.507 0 0 1 8.012 15c-3.166.008-5.638-2.687-5.507-5.851.076-1.826.732-3.784 1.827-5.426C5.469 2.018 6.839 1 8 1c.828 0 1.764.52 2.646 1.438a.25.25 0 0 1 .006.34L7.625 6.166a.5.5 0 0 0 .25.818l1.538.384-.407 2.033a.5.5 0 0 0 .81.484.5.5 0 0 0 .173-.288l.5-2.5a.5.5 0 0 0-.368-.583l-1.198-.3 2.306-2.582a.25.25 0 0 1 .393.025l.044.063C12.83 5.47 13.5 7.577 13.5 9.5" /></g><defs><clipPath id="egg-crack-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgEggCrackFill);
const Memo = memo(ForwardRef);
export default Memo;