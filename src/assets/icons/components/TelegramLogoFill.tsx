import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTelegramLogoFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#telegram-logo-fill_svg__a)"><path fill="#000" d="M14.305 1.637a.56.56 0 0 0-.573-.098L1.066 6.496a.889.889 0 0 0 .152 1.7l3.282.645V12.5a.995.995 0 0 0 .625.927.99.99 0 0 0 1.094-.233l1.583-1.642 2.51 2.198a.99.99 0 0 0 .97.2.99.99 0 0 0 .667-.726l2.537-11.037a.56.56 0 0 0-.181-.55M10.97 13 5.804 8.469l7.438-5.331z" /></g><defs><clipPath id="telegram-logo-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTelegramLogoFill);
const Memo = memo(ForwardRef);
export default Memo;