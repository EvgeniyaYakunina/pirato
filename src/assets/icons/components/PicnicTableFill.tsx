import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPicnicTableFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#picnic-table-fill_svg__a)"><path fill="#000" d="m9.178 6 .909 2H5.913l.909-2zM14.5 3.5v9a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1m-1.5 5a.5.5 0 0 0-.5-.5h-1.312l-.912-2H11a.5.5 0 0 0 0-1H5a.5.5 0 1 0 0 1h.724l-.912 2H3.5a.5.5 0 1 0 0 1h.86l-.813 1.793a.5.5 0 1 0 .91.414l1-2.207h5.084l1.003 2.207a.5.5 0 0 0 .91-.414L11.642 9h.858a.5.5 0 0 0 .5-.5" /></g><defs><clipPath id="picnic-table-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPicnicTableFill);
const Memo = memo(ForwardRef);
export default Memo;