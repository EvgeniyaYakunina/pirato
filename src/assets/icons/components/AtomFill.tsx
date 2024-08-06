import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgAtomFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#atom-fill_svg__a)"><path fill="#000" d="M12.257 8c1.541-2.163 2.327-4.399 1.234-5.491C12.4 1.416 10.163 2.202 8 3.742 5.837 2.202 3.6 1.416 2.509 2.51 1.416 3.6 2.202 5.837 3.742 7.999c-1.54 2.164-2.326 4.4-1.233 5.492.352.352.822.509 1.369.509 1.154 0 2.655-.698 4.125-1.743C9.467 13.302 10.967 14 12.125 14c.547 0 1.018-.158 1.37-.509 1.089-1.092.303-3.328-1.238-5.491m.527-4.784c.478.477.155 2.025-1.157 3.955a19 19 0 0 0-1.325-1.474q-.701-.7-1.473-1.322c1.93-1.313 3.478-1.637 3.955-1.16m-9.568 0c.137-.139.364-.21.663-.21.739 0 1.918.431 3.29 1.369q-.77.623-1.472 1.322-.7.702-1.322 1.474c-1.313-1.93-1.637-3.478-1.16-3.955m0 9.568c-.478-.477-.154-2.025 1.159-3.955a18.8 18.8 0 0 0 2.796 2.796c-1.93 1.312-3.478 1.637-3.955 1.16M8 8.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m4.784 4.035c-.477.478-2.025.155-3.955-1.158a19 19 0 0 0 1.473-1.324q.7-.703 1.323-1.474c1.312 1.93 1.637 3.478 1.16 3.955" /></g><defs><clipPath id="atom-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgAtomFill);
const Memo = memo(ForwardRef);
export default Memo;