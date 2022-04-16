module.exports = {
  // '/examples': getExamplesSidebar(),
  '/': getDefaultSidebar()
}

function getDefaultSidebar() {
  return [
    {
      title: "Introduction",
      path: 'introduction',
      collapsable: false,
      sidebarDepth: 0,
    },
    {
      title: "Getting started",
      path: 'getting-started',
      collapsable: false,
      sidebarDepth: 1,
    },
    {
      title: 'Contract SDK',
      collapsable: false,
      sidebarDepth: 1,
      children: [
        { title: "Accounts and Permissions", path: '/accounts-and-permissions' },
        { title: "Storage", path: '/storage' },
        { title: "Inline Actions", path: '/inline-actions' },
        { title: "Notifications", path: '/notifications' },
        { title: "Testing", path: '/testing' },
        { title: "Debugging", path: '/debugging' },
        {
          title: 'Language Specifics',
          collapsable: true,
          sidebarDepth: 0,
          children: [
            { title: "Concepts", path: '/concepts' },
            { title: "Number Types", path: '/types' },
            { title: "Globals", path: '/globals' }
          ]
        }
      ]
    },
    {
      title: 'Client SDKs',
      collapsable: true,
      sidebarDepth: 1,
      children: [
        { title: "Web", path: '/client-sdks/web' },
        { title: "React Native", path: '/client-sdks/react-native'  },
        { title: "Kotlin", path: '/client-sdks/kotlin'  },
        { title: "Swift", path: '/client-sdks/swift' },
      ]
    },
    {
      title: 'Examples',
      collapsable: true,
      sidebarDepth: 1,
      children: [
        { title: 'Overview', path: '/examples' },
        { title: 'Built with Proton', path: '/built-with-proton' },
      ]
    },
    {
      title: 'API',
      collapsable: false,
      sidebarDepth: 1,
      children: [
        { title: 'Authentication', path: '/api/authentication' },
        { title: 'Assert', path: '/api/assert' },
        { title: 'Blockchain Time', path: '/api/currentTime' },
        { title: 'Cryptography', path: '/api/cryptography' },
        { title: 'Print', path: '/api/print' },
      ]
    },
    {
      title: 'Classes',
      collapsable: false,
      sidebarDepth: 0,
      children: [
        { title: 'Name', path: '/classes/name' },
        { title: 'Symbol', path: '/classes/symbol' },
        { title: 'ExtendedSymbol', path: '/classes/extendedsymbol' },
        { title: 'Asset', path: '/classes/asset' },
        // { title: 'ExtendedAsset', path: '/classes/extendedasset' },
        // { title: 'Action', path: '/classes/action' },
        // { title: 'PermissionLevel', path: '/classes/permissionlevel' },
        // { title: 'TableStore', path: '/classes/tablestore' },
        // {
        //   title: 'Keys',
        //   collapsable: true,
        //   children: [
        //     { title: "PublicKey", path: '/classes/keys/publickey' },
        //     { title: "ECCPublicKey", path: '/classes/keys/eccpublickey' },
        //     { title: "WebAuthNPublicKey", path: '/classes/keys/webauthnpublickey' }
        //   ]
        // },
        // { title: 'Signature', path: '/classes/signature' },
        // {
        //   title: 'Time',
        //   collapsable: true,
        //   children: [
        //     { title: "Microseconds", path: '/classes/time/microseconds' },
        //     { title: "TimePoint", path: '/classes/time/timepoint' },
        //     { title: "TimePointSec", path: '/classes/time/timepointsec' },
        //     { title: "BlockTimestamp", path: '/classes/time/blocktimestamp' },
        //   ]
        // },
        // {
        //   title: 'Checksum',
        //   collapsable: true,
        //   children: [
        //     { title: "Checksum160", path: '/classes/checksum/checksum160' },
        //     { title: "Checksum256", path: '/classes/checksum/checksum256' },
        //     { title: "Checksum512", path: '/classes/checksum/checksum512' },
        //   ]
        // }
      ]
    }
  ]
}

function getExamplesSidebar() {
  return [
    {
      title: 'Examples',
      collapsable: false,
      sidebarDepth: 0,
      children: [
        ['/examples', 'Overview'],
        '/built-with-proton'
      ]
    }
  ]
}
