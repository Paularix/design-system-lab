import{l as e}from"./iframe-DFAviyCv.js";import{t}from"./react-BXYgB72D.js";import{t as n}from"./jsx-runtime-BWaIa8Ji.js";import{expect as r,userEvent as i,within as a}from"./dist-Bby2ZGwZ.js";import{d as o,n as s,t as c}from"./theme-CkdUnjX9.js";import{n as l,t as u}from"./Box-DJk2pqJr.js";import{t as d}from"./Stack-DmKC-YLg.js";import{t as f}from"./AnimatePresence-Cf4HsHd1.js";import{t as p}from"./Divider-OMpnIEqt.js";var m=e(t(),1),h=n(),g=o((0,h.jsx)(`path`,{d:`M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2m6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56M12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96M4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56m2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8M12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96M14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2m.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56M16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2z`}),`Language`),_=({title:e,mainIcon:t,items:n,accentColor:r=c.olive})=>{let[i,a]=(0,m.useState)(!1);return(0,h.jsx)(u,{onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),sx:{position:`relative`,width:56,height:56},children:(0,h.jsxs)(s.div,{animate:{width:i?280:56,height:i?`auto`:56,borderRadius:i?`20px`:`28px`},transition:{type:`spring`,damping:20,stiffness:300},style:{backgroundColor:`#F4F4E8`,color:r,overflow:`hidden`,border:`1px solid ${r}`,boxShadow:i?`0 12px 30px rgba(0,0,0,0.1)`:`none`,cursor:`pointer`,position:`absolute`,top:0,right:0,zIndex:100},children:[(0,h.jsx)(d,{direction:`row`,alignItems:`center`,justifyContent:i?`flex-start`:`center`,sx:{width:`100%`,height:56,px:i?3:0},children:i?(0,h.jsx)(s.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:.1},children:(0,h.jsx)(l,{variant:`subtitle2`,sx:{fontWeight:800,textTransform:`uppercase`,letterSpacing:1},children:e})}):(0,h.jsx)(s.div,{initial:{opacity:0},animate:{opacity:1},children:t})}),(0,h.jsx)(f,{children:i&&(0,h.jsxs)(s.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},style:{padding:`0 24px 20px 24px`},children:[(0,h.jsx)(p,{sx:{mb:2,borderColor:`rgba(0,0,0,0.1)`}}),(0,h.jsx)(d,{spacing:2.5,children:n.map(e=>(0,h.jsxs)(d,{direction:`row`,spacing:2,alignItems:`center`,children:[(0,h.jsx)(l,{sx:{fontSize:`1.5rem`},children:e.visual}),(0,h.jsxs)(u,{children:[(0,h.jsx)(l,{variant:`body2`,sx:{fontWeight:800,lineHeight:1.2},children:e.label}),e.sublabel&&(0,h.jsx)(l,{variant:`caption`,sx:{opacity:.7},children:e.sublabel})]})]},e.id))})]})})]})})};_.__docgenInfo={description:`A floating action menu that expands on hover to reveal a list of items.
Perfect for language switchers, theme selectors, or quick info.`,methods:[],displayName:`ExpandableMenu`,props:{title:{required:!0,tsType:{name:`string`},description:`Menu title shown when expanded`},mainIcon:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`The icon visible when the menu is collapsed`},items:{required:!0,tsType:{name:`Array`,elements:[{name:`MenuItem`}],raw:`MenuItem[]`},description:`Array of items to be displayed in the expanded list`},accentColor:{required:!1,tsType:{name:`string`},description:`Color for text and borders (defaults to theme olive)`,defaultValue:{value:`'#808034'`,computed:!1}}}};var v={title:`Molecules/ExpandableMenu`,component:_,parameters:{layout:`centered`,backgrounds:{default:`light`}},tags:[`autodocs`],argTypes:{accentColor:{control:{type:`color`}}}},y={args:{title:`Languages`,mainIcon:m.createElement(g),accentColor:c.olive,items:[{id:`1`,label:`English`,sublabel:`Professional`,visual:`🇬🇧`},{id:`2`,label:`Spanish`,sublabel:`Native`,visual:`ES`}]}},b={args:{title:`Hover Menu`,mainIcon:m.createElement(g,{"data-testid":`menu-icon`}),accentColor:c.purple,items:[{id:`1`,label:`Hidden Item`,sublabel:`Visible on hover`,visual:`✨`}]},play:async({canvasElement:e})=>{let t=a(e),n=t.getByTestId(`menu-icon`).closest(`div[style*="cursor: pointer"]`);if(n instanceof HTMLElement){await i.hover(n),await r(await t.findByText(`Hover Menu`)).toBeVisible();let e=await t.findByText(`Hidden Item`);await r(e).toBeVisible(),await i.unhover(n),await new Promise(e=>setTimeout(e,600)),await r(e).not.toBeVisible()}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Languages',
    mainIcon: React.createElement(LanguageIcon),
    accentColor: colors.olive,
    items: [{
      id: '1',
      label: 'English',
      sublabel: 'Professional',
      visual: '🇬🇧'
    }, {
      id: '2',
      label: 'Spanish',
      sublabel: 'Native',
      visual: 'ES'
    }]
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Hover Menu',
    // Adding data-testid to the icon to find the menu trigger reliably
    mainIcon: React.createElement(LanguageIcon, {
      ...({
        "data-testid": "menu-icon"
      } as React.HTMLAttributes<HTMLOrSVGElement>)
    } as SvgIconProps),
    accentColor: colors.purple,
    items: [{
      id: '1',
      label: 'Hidden Item',
      sublabel: 'Visible on hover',
      visual: '✨'
    }]
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Find the trigger by the icon since the title is hidden initially
    const icon = canvas.getByTestId('menu-icon');
    const container = icon.closest('div[style*="cursor: pointer"]');
    if (container instanceof HTMLElement) {
      // Action: Hover to expand
      await userEvent.hover(container);

      // Now that we hovered, the title "Hover Menu" should appear
      const title = await canvas.findByText('Hover Menu');
      await expect(title).toBeVisible();

      // Verify the hidden item is also visible
      const item = await canvas.findByText('Hidden Item');
      await expect(item).toBeVisible();

      // Action: Unhover to collapse
      await userEvent.unhover(container);
      await new Promise(r => setTimeout(r, 600));

      // Verify it hides again
      await expect(item).not.toBeVisible();
    }
  }
}`,...b.parameters?.docs?.source}}};var x=[`Default`,`AutomatedTest`];export{b as AutomatedTest,y as Default,x as __namedExportsOrder,v as default};