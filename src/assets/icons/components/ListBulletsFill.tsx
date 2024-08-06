import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgListBulletsFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#list-bullets-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-8.75 9.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m0-3a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m0-3a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5M12 11.5H6.5a.5.5 0 0 1 0-1H12a.5.5 0 0 1 0 1m0-3H6.5a.5.5 0 1 1 0-1H12a.5.5 0 0 1 0 1m0-3H6.5a.5.5 0 1 1 0-1H12a.5.5 0 0 1 0 1" /></g><defs><clipPath id="list-bullets-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgListBulletsFill);
const Memo = memo(ForwardRef);
export default Memo;