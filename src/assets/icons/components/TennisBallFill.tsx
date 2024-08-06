import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTennisBallFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#tennis-ball-fill_svg__a)"><path fill="#000" d="M1.55 7.213a6.494 6.494 0 0 1 5.663-5.666.25.25 0 0 1 .28.237 5.49 5.49 0 0 1-5.705 5.708.25.25 0 0 1-.237-.279m12.66 1.294c-.07 0-.14-.005-.21-.005a5.49 5.49 0 0 0-5.493 5.714.25.25 0 0 0 .28.237 6.494 6.494 0 0 0 5.662-5.667.25.25 0 0 0-.24-.28m-4.806.897A6.46 6.46 0 0 1 14 7.5h.193a.25.25 0 0 0 .258-.277 6.494 6.494 0 0 0-5.68-5.68.25.25 0 0 0-.277.257 6.48 6.48 0 0 1-1.898 4.794A6.46 6.46 0 0 1 2 8.5h-.193a.25.25 0 0 0-.258.277 6.494 6.494 0 0 0 5.68 5.68.25.25 0 0 0 .277-.257 6.48 6.48 0 0 1 1.898-4.796" /></g><defs><clipPath id="tennis-ball-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTennisBallFill);
const Memo = memo(ForwardRef);
export default Memo;