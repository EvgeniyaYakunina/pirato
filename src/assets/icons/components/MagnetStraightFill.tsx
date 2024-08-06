import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMagnetStraightFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#magnet-straight-fill_svg__a)"><path fill="#000" d="M12.5 2.5H10a1 1 0 0 0-1 1V9a1 1 0 0 1-2 0V3.5a1 1 0 0 0-1-1H3.5a1 1 0 0 0-1 1V9A5.5 5.5 0 0 0 8 14.5h.042c3.01-.023 5.458-2.518 5.458-5.562V3.5a1 1 0 0 0-1-1m0 1V6H10V3.5zM6 3.5V6H3.5V3.5z" /></g><defs><clipPath id="magnet-straight-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgMagnetStraightFill);
const Memo = memo(ForwardRef);
export default Memo;