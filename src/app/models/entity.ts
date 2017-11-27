// Module dependencies.
import { connection } from '../config/database'
import { Table, Column, Model, DataType, PrimaryKey, ForeignKey } from 'sequelize-typescript'

// Entity Table Model.
@Table(
  {
    tableName: 'Entity',
    timestamps: false,
    paranoid: false
  }
)
export class Entity extends Model<Entity> {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true
  })
  uuId: number

  @ForeignKey(() => Entity)
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  parentId: number

  @Column({
    type: DataType.TEXT,
    allowNull: true
  })
  name: string

  @Column({
    type: DataType.TEXT,
    allowNull: true
  })
  url: string
}

// Add model to Sequelize instance.
connection.addModels([Entity])
console.log('Entity model is ready!')
