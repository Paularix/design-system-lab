import{l as e}from"./iframe-DFAviyCv.js";import{t}from"./react-BXYgB72D.js";import{t as n}from"./jsx-runtime-BWaIa8Ji.js";import{expect as r,fn as i,userEvent as a,within as o}from"./dist-Bby2ZGwZ.js";import{d as s,n as c,t as l}from"./theme-CkdUnjX9.js";import{n as u,t as d}from"./Box-DJk2pqJr.js";import{t as f}from"./ArrowForward-uBtH9t_k.js";var p=e(t(),1),m=n(),h=s((0,m.jsx)(`path`,{d:`M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1 1.1-.49 1.1-1.1-.49-1.1-1.1-1.1M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m2.19 12.19L6 18l3.81-8.19L18 6z`}),`Explore`),g=({href:e=`#`,overline:t,title:n,icon:r,onClick:i})=>(0,m.jsxs)(d,{sx:{pt:2,borderTop:`1px solid ${l.lavender}`,display:`inline-block`,cursor:`pointer`},onClick:i,children:[t&&(0,m.jsx)(u,{variant:`caption`,sx:{color:l.olive,fontWeight:800,textTransform:`uppercase`,mb:.5,display:`block`,letterSpacing:1.5},children:t}),(0,m.jsx)(`a`,{href:e,style:{textDecoration:`none`},onClick:e=>{i&&(e.preventDefault(),i())},children:(0,m.jsxs)(c.div,{whileHover:{x:6},style:{display:`flex`,alignItems:`center`,gap:`8px`,color:l.purple,fontWeight:800,fontSize:`1.1rem`},children:[r,n,(0,m.jsx)(f,{sx:{fontSize:18,opacity:.6}})]})})]});g.__docgenInfo={description:``,methods:[],displayName:`SectionLink`,props:{href:{required:!1,tsType:{name:`string`},description:`URL of the destination section`,defaultValue:{value:`"#"`,computed:!1}},overline:{required:!1,tsType:{name:`string`},description:`Category or overline text (optional)`},title:{required:!0,tsType:{name:`string`},description:`Main action title`},icon:{required:!1,tsType:{name:`ReactNode`},description:`Optional decorative icon`},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Click handler for SPA navigation`}}};var _={title:`Atoms/SectionLink`,component:g,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:i()}},v={args:{title:`Explore my projects`,overline:`Portfolio`,href:`#`},play:async({canvasElement:e})=>{let t=o(e);await r(t.getByText(`Portfolio`)).toBeInTheDocument(),await r(t.getByText(`Explore my projects`)).toBeInTheDocument()}},y={args:{title:`View full experience`,href:`#`},play:async({canvasElement:e})=>{let t=o(e).getByRole(`link`);await a.hover(t),await r(t).toBeVisible()}},b={args:{title:`Go to Showroom`,overline:`Library`,href:`#`,icon:p.createElement(h,{"data-testid":`explore-icon`,sx:{fontSize:20}})},play:async({canvasElement:e})=>{await r(o(e).getByTestId(`explore-icon`)).toBeInTheDocument()}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Explore my projects',
    overline: 'Portfolio',
    href: '#'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Portfolio')).toBeInTheDocument();
    await expect(canvas.getByText('Explore my projects')).toBeInTheDocument();
  }
}`,...v.parameters?.docs?.source},description:{story:`Basic rendering test for structural elements`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'View full experience',
    href: '#'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const linkContainer = canvas.getByRole('link');
    await userEvent.hover(linkContainer);
    await expect(linkContainer).toBeVisible();
  }
}`,...y.parameters?.docs?.source},description:{story:`Interaction test to ensure hover stability`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Go to Showroom',
    overline: 'Library',
    href: '#',
    icon: React.createElement(ExploreIcon, {
      ...({
        "data-testid": "explore-icon"
      } as React.HTMLAttributes<HTMLOrSVGElement>),
      sx: {
        fontSize: 20
      }
    } as SvgIconProps)
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByTestId('explore-icon')).toBeInTheDocument();
  }
}`,...b.parameters?.docs?.source},description:{story:`Icon injection test using strict typing for MUI Icon attributes`,...b.parameters?.docs?.description}}};var x=[`Default`,`HoverInteraction`,`WithCustomIcon`];export{v as Default,y as HoverInteraction,b as WithCustomIcon,x as __namedExportsOrder,_ as default};