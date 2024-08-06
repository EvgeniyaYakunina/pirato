import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHoodieFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#hoodie-fill_svg__a)"><path fill="#000" d="m14.832 7.533-3.394-5.088a1 1 0 0 0-.83-.445H5.392a1 1 0 0 0-.83.445L1.169 7.533a1 1 0 0 0-.133.818l1.34 4.912A1 1 0 0 0 3.34 14H5a1 1 0 0 0 1-1v-1h4v1a1 1 0 0 0 1 1h1.66a1 1 0 0 0 .965-.737l1.34-4.912a1 1 0 0 0-.133-.818M5 13H3.34L2 8.088l2-3V11a1 1 0 0 0 1 1zm2.5-4.5a.5.5 0 1 1-1 0V6.071a.5.5 0 1 1 1 0zm2-.5a.5.5 0 1 1-1 0V6.071a.5.5 0 1 1 1 0zM8 4.92 5.21 3.273 5.392 3h5.216l.183.274zM12.66 13H11v-1a1 1 0 0 0 1-1V5.088l2 3z" /></g><defs><clipPath id="hoodie-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgHoodieFill);
const Memo = memo(ForwardRef);
export default Memo;