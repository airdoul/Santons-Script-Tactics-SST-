<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250819095041 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE character_instance (id INT AUTO_INCREMENT NOT NULL, team_id INT NOT NULL, template_id INT NOT NULL, INDEX IDX_1A31584F296CD8AE (team_id), INDEX IDX_1A31584F5DA0FB8 (template_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE character_template (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(64) NOT NULL, role VARCHAR(32) NOT NULL, base_hp INT NOT NULL, base_atk INT NOT NULL, base_def DOUBLE PRECISION NOT NULL, base_spd INT NOT NULL, base_heal INT DEFAULT NULL, base_crit DOUBLE PRECISION NOT NULL, base_crit_dmg DOUBLE PRECISION NOT NULL, artwork_url VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE match_event (id INT AUTO_INCREMENT NOT NULL, sstmatch_id INT NOT NULL, turn INT NOT NULL, action VARCHAR(32) NOT NULL, actor_name VARCHAR(64) NOT NULL, target_name VARCHAR(64) DEFAULT NULL, amount INT DEFAULT NULL, is_crit TINYINT(1) NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_85C47506F3EA5AE3 (sstmatch_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE player (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(255) NOT NULL, username VARCHAR(64) NOT NULL, password VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE queue_ticket (id INT AUTO_INCREMENT NOT NULL, player_id INT NOT NULL, team_id INT NOT NULL, mmr INT NOT NULL, status VARCHAR(32) NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_AD41876A99E6F5DF (player_id), INDEX IDX_AD41876A296CD8AE (team_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE rating_history (id INT AUTO_INCREMENT NOT NULL, player_id INT NOT NULL, delta INT NOT NULL, mmr_after INT NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_C4F6893399E6F5DF (player_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE sstmatch (id INT AUTO_INCREMENT NOT NULL, team_a_id INT NOT NULL, team_b_id INT NOT NULL, winner_team_id INT DEFAULT NULL, status VARCHAR(32) NOT NULL, rng_seed INT DEFAULT NULL, started_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', finished_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', team_apower DOUBLE PRECISION DEFAULT NULL, team_bpower DOUBLE PRECISION DEFAULT NULL, team_apercent DOUBLE PRECISION DEFAULT NULL, random_draw TINYINT(1) DEFAULT NULL, INDEX IDX_B6B7FE63EA3FA723 (team_a_id), INDEX IDX_B6B7FE63F88A08CD (team_b_id), INDEX IDX_B6B7FE63C5237001 (winner_team_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE team (id INT AUTO_INCREMENT NOT NULL, player_id INT NOT NULL, name VARCHAR(64) NOT NULL, is_locked TINYINT(1) NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_C4E0A61F99E6F5DF (player_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(180) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, UNIQUE INDEX UNIQ_IDENTIFIER_EMAIL (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE character_instance ADD CONSTRAINT FK_1A31584F296CD8AE FOREIGN KEY (team_id) REFERENCES team (id)');
        $this->addSql('ALTER TABLE character_instance ADD CONSTRAINT FK_1A31584F5DA0FB8 FOREIGN KEY (template_id) REFERENCES character_template (id)');
        $this->addSql('ALTER TABLE match_event ADD CONSTRAINT FK_85C47506F3EA5AE3 FOREIGN KEY (sstmatch_id) REFERENCES sstmatch (id)');
        $this->addSql('ALTER TABLE queue_ticket ADD CONSTRAINT FK_AD41876A99E6F5DF FOREIGN KEY (player_id) REFERENCES player (id)');
        $this->addSql('ALTER TABLE queue_ticket ADD CONSTRAINT FK_AD41876A296CD8AE FOREIGN KEY (team_id) REFERENCES team (id)');
        $this->addSql('ALTER TABLE rating_history ADD CONSTRAINT FK_C4F6893399E6F5DF FOREIGN KEY (player_id) REFERENCES player (id)');
        $this->addSql('ALTER TABLE sstmatch ADD CONSTRAINT FK_B6B7FE63EA3FA723 FOREIGN KEY (team_a_id) REFERENCES team (id)');
        $this->addSql('ALTER TABLE sstmatch ADD CONSTRAINT FK_B6B7FE63F88A08CD FOREIGN KEY (team_b_id) REFERENCES team (id)');
        $this->addSql('ALTER TABLE sstmatch ADD CONSTRAINT FK_B6B7FE63C5237001 FOREIGN KEY (winner_team_id) REFERENCES team (id)');
        $this->addSql('ALTER TABLE team ADD CONSTRAINT FK_C4E0A61F99E6F5DF FOREIGN KEY (player_id) REFERENCES player (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE character_instance DROP FOREIGN KEY FK_1A31584F296CD8AE');
        $this->addSql('ALTER TABLE character_instance DROP FOREIGN KEY FK_1A31584F5DA0FB8');
        $this->addSql('ALTER TABLE match_event DROP FOREIGN KEY FK_85C47506F3EA5AE3');
        $this->addSql('ALTER TABLE queue_ticket DROP FOREIGN KEY FK_AD41876A99E6F5DF');
        $this->addSql('ALTER TABLE queue_ticket DROP FOREIGN KEY FK_AD41876A296CD8AE');
        $this->addSql('ALTER TABLE rating_history DROP FOREIGN KEY FK_C4F6893399E6F5DF');
        $this->addSql('ALTER TABLE sstmatch DROP FOREIGN KEY FK_B6B7FE63EA3FA723');
        $this->addSql('ALTER TABLE sstmatch DROP FOREIGN KEY FK_B6B7FE63F88A08CD');
        $this->addSql('ALTER TABLE sstmatch DROP FOREIGN KEY FK_B6B7FE63C5237001');
        $this->addSql('ALTER TABLE team DROP FOREIGN KEY FK_C4E0A61F99E6F5DF');
        $this->addSql('DROP TABLE character_instance');
        $this->addSql('DROP TABLE character_template');
        $this->addSql('DROP TABLE match_event');
        $this->addSql('DROP TABLE player');
        $this->addSql('DROP TABLE queue_ticket');
        $this->addSql('DROP TABLE rating_history');
        $this->addSql('DROP TABLE sstmatch');
        $this->addSql('DROP TABLE team');
        $this->addSql('DROP TABLE user');
    }
}
