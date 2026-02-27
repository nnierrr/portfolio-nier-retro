import { Fragment } from 'react'
import { stats } from '../../data/portfolio'
import './StatsBar.css'

export function StatsBar() {
  return (
    <div className="stats-bar">
      {stats.map((stat, i) => (
        <Fragment key={stat.value}>
          <div className="stats-bar__stat">
            <span className={`stats-bar__value stats-bar__value--${stat.color}`}>
              {stat.value}
            </span>
            <span className="stats-bar__label">{stat.label}</span>
          </div>
          {i < stats.length - 1 && <div className="stats-bar__divider" />}
        </Fragment>
      ))}
    </div>
  )
}