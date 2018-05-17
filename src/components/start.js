import m from 'mithril';

export default {
    view: () => (
        <nav>
            <a href='/maps' oncreate={m.route.link}>Maps</a>
            <a href='/flags' oncreate={m.route.link}>Flags</a>
            <a href='/capitals' oncreate={m.route.link}>Capitals</a>
            <a href='/full' oncreate={m.route.link}>Full game</a>
        </nav>
    ),
};
