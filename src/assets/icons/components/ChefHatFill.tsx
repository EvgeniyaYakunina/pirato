import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgChefHatFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#chef-hat-fill_svg__a)"><path fill="#000" d="M15 7a3.504 3.504 0 0 0-3.83-3.484 3.5 3.5 0 0 0-6.34 0Q4.667 3.5 4.5 3.5A3.5 3.5 0 0 0 3 10.162V13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-2.838A3.51 3.51 0 0 0 15 7M9.515 8.879l.5-2a.5.5 0 0 1 .97.242l-.5 2a.5.5 0 1 1-.97-.242M7.5 6.999a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0zM5.38 6.516a.5.5 0 0 1 .606.364l.5 2a.5.5 0 0 1-.796.515.5.5 0 0 1-.177-.273l-.5-2a.5.5 0 0 1 .367-.606M12 13H4v-2.536q.25.036.5.036h7q.252 0 .5-.037z" /></g><defs><clipPath id="chef-hat-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgChefHatFill);
const Memo = memo(ForwardRef);
export default Memo;