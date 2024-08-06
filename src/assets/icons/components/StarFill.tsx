import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgStarFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#star-fill_svg__a)"><path fill="#000" d="m14.643 7.178-2.812 2.427.857 3.63a1.025 1.025 0 0 1-1.532 1.113L8 12.406l-3.158 1.942a1.024 1.024 0 0 1-1.53-1.114l.86-3.629L1.36 7.178a1.029 1.029 0 0 1 .582-1.803l3.688-.297 1.422-3.443a1.023 1.023 0 0 1 1.892 0l1.422 3.443 3.688.297a1.029 1.029 0 0 1 .585 1.804z" /></g><defs><clipPath id="star-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgStarFill);
const Memo = memo(ForwardRef);
export default Memo;